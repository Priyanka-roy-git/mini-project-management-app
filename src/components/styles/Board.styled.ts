
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;                     /* ⬅ prevent body scroll */
  animation: fadeIn 0.6s ease-in-out;
  background: linear-gradient(to bottom right, #ede9fe, #fdf4ff);
`;


export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(to right, #7c3aed, #a855f7);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
`;

export const BackLink = styled(Link)`
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    text-decoration: underline;
    color: #e0e7ff;
  }
`;

export const ProjectName = styled.h2`
  flex: 1;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BoardArea = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  gap: 1.25rem;
  padding: 1.5rem;
  background: linear-gradient(to right, #dad7ea, #ede9fe);

  
  overflow-x: auto;
  overflow-y: hidden;
  max-height: 100%;


  justify-content: center;

 
  scrollbar-width: thin;
  scrollbar-color: #a855f7 transparent; 

  &::-webkit-scrollbar {
    height: 8px;                  
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #a855f7;       
    border-radius: 4px;
  }

  /* Mobile-specific tweaks */
  @media (max-width: 768px) {
    justify-content: flex-start;     
  }
`;



export const NotFound = styled.p`
  margin-top: 3rem;
  text-align: center;
  color: #6b7280;
  font-weight: 600;
  font-size: 1.2rem;
  animation: fadeIn 0.5s ease-in-out;
`;


const fadeIn = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0);    }
  }
`;
export const GlobalStyle = styled.div`${fadeIn}`;
