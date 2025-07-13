import styled, { keyframes } from 'styled-components';


const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0);   }
`;


export const Container = styled.div`
  width: 20rem;
  flex-shrink: 0;


  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.22) 0%,
    rgba(236, 233, 255, 0.14) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(12px);
  border-radius: 0.75rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;


  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  animation: ${fadeIn} 0.4s ease forwards;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  }
`;


export const Title = styled.h3`
  margin-bottom: 0.75rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: #4f46e5;         
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.4);
`;


export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-height: 20px;
  flex: 1;
  overflow-y: auto;

  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;
