import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;


export const Container = styled.div`
  width: 40rem;
  height: 35rem;
  margin: 3rem auto;
  padding: 2rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  animation: ${fadeIn} 0.6s ease-in-out;
  background-image: linear-gradient(135deg, #6366f1, #8b5cf6 50%, #ec4899);

  display: flex;
  flex-direction: column;

  min-height: 0;

  @media (max-width: 640px) {
    width: 90%;
    height: 80vh;
    margin: 1rem auto;
    padding: 1.25rem;
  }
`;




export const Heading = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 2rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    @media (max-width: 640px) {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }

`;

export const Form = styled.form`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2rem;
   @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #e0e0e0;
  background-color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  outline: none;
  transition: box-shadow 0.2s;

  &:focus {
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.4);
  }
`;

export const AddButton = styled.button`
  padding: 0.75rem 1.25rem;
  background-color: #10b981;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.25s, transform 0.15s;

  &:hover {
    background-color: #059669;
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.97);
  }
     @media (max-width: 640px) {
    width: 100%;
  }
`;


export const ProjectList = styled.ul`
  flex: 1; 
  overflow-y: auto;
  min-height: 0;  
  margin-top: 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-right: 0.25rem;

 
  scrollbar-width: thin;
  scrollbar-color: #4e1f7aff transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #4d1f79ff;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #7c3aed;
  }
`;


export const ProjectItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid #cbd5e1;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
     @media (max-width: 640px) {
    padding: 1rem;
  }
`;

export const ProjectLink = styled(Link)`
  font-weight: 600;
  color: #3b82f6;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
    color: #2563eb;
  }
`;

export const DeleteButton = styled.button`
  font-size: 0.875rem;
  color: #ef4444;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #b91c1c;
  }
`;
