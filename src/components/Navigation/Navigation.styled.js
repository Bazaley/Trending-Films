import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  margin-left: 40px;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  color: white;
  text-decoration: none;
  text-transform: uppercase;

  &:not(:last-child) {
    margin-right: 30px;
  }
  &.active {
    color: #e1900e;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    font-weight: 700;
  }
`;
