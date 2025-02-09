import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(255, 255, 255, 0.2),
    0px 1px 1px 0px rgba(255, 255, 255, 0.14),
    0px 2px 1px -1px rgba(255, 255, 255, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const DescriptionBox = styled.div`
  padding: 20px 0 20px 10px;
`;

export const Paragraph = styled.p`
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  color: white;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const BoxPhoto = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: white;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    height: 81%;
  }
`;
