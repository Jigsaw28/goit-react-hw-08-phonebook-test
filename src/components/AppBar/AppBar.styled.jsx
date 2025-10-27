import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background: linear-gradient(180deg, #f7fbfb 0%, #eef7f6 100%);
  padding: 14px 22px;
  color: #0f3740;
  box-shadow: 0 2px 10px rgba(15, 55, 64, 0.06);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  color: #3b5560;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 10px;
  font-weight: 500;
  transition: background-color 160ms ease, color 160ms ease,
    transform 120ms ease, box-shadow 160ms ease, border-color 160ms ease;

  /* push other links to the right */
  &:first-child {
    margin-right: auto;
  }

  &:hover {
    background: rgba(3, 74, 72, 0.08);
    color: #05343a;
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid rgba(4, 66, 61, 0.14);
    outline-offset: 2px;
  }

  &.active {
    background: linear-gradient(180deg, #a8efe2 0%, #8dead8 100%);
    color: #012e2b;
    border: 1px solid rgba(4, 66, 61, 0.14);
    box-shadow: 0 6px 18px rgba(3, 74, 72, 0.12);
    transform: translateY(-1px);
  }
`;