import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../stores/authStore';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
} from 'mdb-react-ui-kit';
import 'animate.css';

export default function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const login    = useAuthStore((s) => s.login);
  const errorMsg = useAuthStore((s) => s.error);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(id.trim(), pw)) navigate('/dashboard');
  };

  return (
    <MDBContainer fluid className="d-flex align-items-center justify-content-center min-vh-100 bg-login overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="glass-card animate__animated animate__fadeInDown"
        style={{ width: '90%', maxWidth: 520 }}
      >
        <MDBRow className="w-100">

          <MDBCol md="6" className="d-none d-md-flex align-items-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="illustration"
            />
          </MDBCol>

          <MDBCol md="6">
            <h4 className="fw-bold text-center mb-4 text-white">Welcome back 👋</h4>

            <MDBInput
              wrapperClass="mb-4"
              label="User ID"
              id="userId"
              type="text"
              size="lg"
              value={id}
              onChange={(e) => setId(e.target.value)}
              contrast
            />

            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="userPw"
              type="password"
              size="lg"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              contrast
            />

            {errorMsg && (
              <p className="text-danger text-center mb-3" style={{ fontSize: 14 }}>
                {errorMsg}
              </p>
            )}

            <MDBBtn
              className="mb-4 w-100 btn-login"
              size="lg"
              style={{ backgroundColor: '#1e40af' }}
              type="submit"
            >
              Sign in
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </form>
    </MDBContainer>
  );
}
