import { Nav, StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <StyledNavLink to="/">Главная</StyledNavLink>
      <StyledNavLink to="/movies">Описание</StyledNavLink>
    </Nav>
  );
};
