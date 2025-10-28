import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Email, Info, LogoutButton, Wrapper } from './UserMenu.styled';
import { logout } from '../../redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user.email);

  const handleLogout = () => dispatch(logout());

  return (
    <Wrapper>
      <Info>
        <Avatar aria-hidden>👤</Avatar>
        <Email>{email}</Email>
      </Info>
      <LogoutButton type="button" onClick={handleLogout}>
        Logout
      </LogoutButton>
    </Wrapper>
  );
};
