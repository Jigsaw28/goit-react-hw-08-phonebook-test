import styled from 'styled-components';
import { Form } from 'formik';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 28px 16px;
  width: 100%;
`;

export const StyledForm = styled(Form)`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 22px;
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border: 1px solid rgba(255,255,255,0.04);
  box-shadow: 0 10px 28px rgba(2,6,23,0.55);
`;

export const SubmitButton = styled.button`
  padding: 10px 14px;
  border-radius: 8px;
  background: linear-gradient(90deg,#7c3aed,#4c1d95);
  color: #fff;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: transform .12s ease, box-shadow .12s ease, opacity .12s ease;
  box-shadow: 0 8px 22px rgba(76,29,149,0.16);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const StatusMessage = styled.div`
  color: #ef4444;
  font-size: 0.95rem;
  margin-bottom: 4px;
`;