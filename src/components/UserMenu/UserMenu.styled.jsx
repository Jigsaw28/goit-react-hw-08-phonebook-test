import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px;
  border-radius: 12px;
  background: linear-gradient(
    180deg,
    rgba(122, 217, 201, 0.06),
    rgba(122, 217, 201, 0.02)
  );
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Avatar = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(180deg, #dff6ef 0%, #c8f0e6 100%);
  color: #012e2b;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(4, 66, 61, 0.06);
`;

export const Email = styled.span`
  font-size: 14px;
  color: #04423d;
  font-weight: 600;
`;

export const LogoutButton = styled.button`
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid rgba(4, 66, 61, 0.08);
  background: white;
  color: #05343a;
  font-weight: 600;
  cursor: pointer;
  transition: transform 120ms ease, box-shadow 120ms ease,
    background-color 120ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(4, 66, 61, 0.08);
    background: linear-gradient(180deg, #f7fffd, #eefcfb);
  }

  &:active {
    transform: translateY(0);
    opacity: 0.95;
  }
`;
