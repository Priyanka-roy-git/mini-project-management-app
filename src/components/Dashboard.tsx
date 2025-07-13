
import { useState } from 'react';
import { useProjectStore } from '../stores/projectStore';
import * as S from './styles/Dashboard.styled';

export default function Dashboard() {
  const { projects, addProject, deleteProject } = useProjectStore();
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      addProject(name.trim());
      setName('');
    }
  };

  return (
    <S.Container>
      <S.Heading>Task Management</S.Heading>

      <S.Form onSubmit={handleSubmit}>
        <S.Input className="ProjectName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New project name"
        />
        <S.AddButton type="submit">Add</S.AddButton>
      </S.Form>

      <S.ProjectList>
        {projects.map((p) => (
          <S.ProjectItem key={p.id}>
            <S.ProjectLink to={`/project/${p.id}`}>{p.name}</S.ProjectLink>
            <S.DeleteButton onClick={() => deleteProject(p.id)}>✕</S.DeleteButton>
          </S.ProjectItem>
        ))}
      </S.ProjectList>
    </S.Container>
  );
}
