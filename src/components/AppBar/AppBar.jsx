import { useSelector } from "react-redux";
import { Header, Nav, StyledLink } from "./AppBar.styled";
import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";

export const AppBar = () => {
  const { isLoggedIn } = useSelector(state => state.auth);
  return (
    <Header>
      <Nav>
        <StyledLink to="/" end>Home</StyledLink>
        {isLoggedIn? <UserMenu /> :<AuthNav />}
      </Nav>
    </Header>
  );
}