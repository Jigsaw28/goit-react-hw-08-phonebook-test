import { use } from "react";
import { useSelector } from "react-redux";
import { Avatar, Email, Info, LogoutButton, Wrapper } from "./UserMenu.styled";

export const UserMenu = () => {
  const email = useSelector(state => state.auth.user.email);
  
  return (
    <Wrapper>
      <Info>
        <Avatar aria-hidden>👤</Avatar>
        <Email>{email}</Email>
      </Info>
      <LogoutButton type="button">Logout</LogoutButton>
    </Wrapper>
  );
};
