import { useSelector } from 'react-redux';
import { Header, Left, Nav, Right, StyledLink } from './AppBar.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const AppBar = () => {
  const { isLoggedIn } = useSelector(state => state.auth);
  return (
     <Header>
      <Nav>
        <Left>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
        </Left>

        <Right>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Right>
      </Nav>
    </Header>
  );
};
