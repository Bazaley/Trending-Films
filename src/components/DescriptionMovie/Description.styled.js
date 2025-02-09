import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  margin-bottom: 20px;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

export const Img = styled.div`
  width: 200px;

  @media screen and (max-width: 767px) {
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 1200px) {
    width: 700px;
  }
`;

export const Description = styled.div`
  padding: 20px 0 0 20px;
`;

export const Paragraph = styled.p`
  font-size: ${({ head }) => (head ? '17px' : '15px')};
  font-weight: ${({ head }) => (head ? '700' : '400')};
  color: white;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 768px) {
    font-size: ${({ head }) => (head ? '24px' : '18px')};

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
