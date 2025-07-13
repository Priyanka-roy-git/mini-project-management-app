
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Card = styled.div`
  position: relative;
  background: linear-gradient(135deg, #fdfbff, #f3f0ff); 
  border: 1px solid #d1d5db; 
  padding: 0.75rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  animation: ${fadeIn} 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 1rem;
  color: #4b3ec9;  
`;

export const DueDate = styled.div`
  font-size: 0.75rem;
  margin-top: 0.25rem;
  color: #6b7280;
  font-style: italic;
`;

export const OverlayButton = styled.button`
  position: absolute;
  inset: 0;
  z-index: 10;
  border: none;
  background: transparent;
  cursor: pointer;
`;
