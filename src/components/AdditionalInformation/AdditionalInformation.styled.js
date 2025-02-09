import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Paragraph = styled.p`
  margin-bottom: 20px;
  font-size: 21px;
  font-weight: 500;
  text-align: center;
  color: white;
`;
export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
  padding: 10px;
  border-top: 2px solid gray;
  border-bottom: 2px solid gray;

  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`;

export const Span = styled.span`
  margin-right: 5px;

  @media screen and (min-width: 768px) {
    margin-right: 10px;
  }
`;
export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  color: white;
  text-decoration: none;

  &.active {
    color: #e1900e;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    font-weight: 700;
  }
`;
