import styled from 'styled-components';

export const Wrapper = styled.section`
  min-height: 60vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:40px 16px;
  background: linear-gradient(180deg, rgba(10,14,24,0.02), transparent);
`;

export const Card = styled.div`
  width:100%;
  max-width:820px;
  padding:36px;
  border-radius:14px;
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border: 1px solid rgba(255,255,255,0.04);
  box-shadow: 0 12px 40px rgba(2,6,23,0.6);
  text-align:center;
`;

export const Title = styled.h1`
  margin:0 0 10px 0;
  font-size:2.2rem;
  line-height:1.05;
  font-weight:700;
  background: linear-gradient(90deg,#7c3aed,#4c1d95);
  -webkit-background-clip:text;
  background-clip:text;
  color:transparent;
`;

export const Lead = styled.p`
  margin:0 0 22px 0;
  color:#95a0b2;
  font-size:1.05rem;
  max-width:700px;
  margin-left:auto;
  margin-right:auto;
`;