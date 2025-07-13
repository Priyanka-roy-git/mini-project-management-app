
import styled, { keyframes } from 'styled-components';


const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;
const pop = keyframes`
  0%   { transform: scale(0.9); opacity: 0; }
  60%  { transform: scale(1.03); opacity: 1; }
  100% { transform: scale(1); }
`;

export const TriggerButton = styled.button`
  margin-left: auto;
  padding: 0.35rem 1rem;
  background: linear-gradient(135deg, #34d399, #059669);
  color: #fff;
  font-size: 0.875rem;
  border: none;
  border-radius: 0.45rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.25s, box-shadow 0.25s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
  }
`;


export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  animation: ${fadeIn} 0.3s ease;
`;

export const Modal = styled.div`
  width: 22rem;
  background: linear-gradient(135deg, #ffffffcc 30%, #f3f4ffcc 100%);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 0.75rem;
  padding: 2rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
  animation: ${pop} 0.35s ease-out;
`;

export const Title = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  color: #4f46e5;
`;

const field = `
  width: 100%;
  padding: 0.55rem 0.6rem;
  border-radius: 0.45rem;
  border: 1px solid #c7c9df;
  font-size: 0.95rem;
  outline: none;
  background: #ffffffea;

  &:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.25);
  }
`;
export const Input   = styled.input`${field}`;
export const Textarea = styled.textarea`${field}`;
export const Select  = styled.select`${field}`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.65rem;
  padding-top: 0.5rem;
`;

const buttonBase = `
  padding: 0.35rem 1rem;
  font-size: 0.875rem;
  border-radius: 0.45rem;
  cursor: pointer;
  transition: transform 0.15s;
  &:hover { transform: translateY(-2px); }
  &:active { transform: translateY(0); }
`;

export const CancelButton = styled.button`
  ${buttonBase};
  background: #ffffff;
  border: 1px solid #d1d5db;
`;

export const SaveButton = styled.button`
  ${buttonBase};
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #ffffff;
  border: none;
`;

export const DeleteButton = styled.button`
  ${buttonBase};
  background: none;
  color: #ef4444;
  border: none;

  &:hover { color: #b91c1c; }
`;

export const ErrorMsg = styled.p`
  color: #ef4444;
  font-size: 0.75rem;
  margin: 0.25rem 0 0 0.1rem;
`;
