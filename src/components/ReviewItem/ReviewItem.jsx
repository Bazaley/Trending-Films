import { Item, Title, Paragraph } from './ReviewItem.styled';

export const ReviewItem = ({ author, content }) => {
  return (
    <Item>
      <Title>Извините, но у нас обзор только на английском языке</Title>
      <Paragraph head>Author: {author}</Paragraph>
      <Paragraph>{content}</Paragraph>
    </Item>
  );
};
