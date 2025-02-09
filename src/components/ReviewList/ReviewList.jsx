import { ReviewItem } from 'components/ReviewItem/ReviewItem';
import { List, Paragraph } from './ReviewList.styled';

export const ReviewList = ({ reviews }) => {
  return (
    <List>
      {reviews.length ? (
        reviews.map(({ author, content, id }) => (
          <ReviewItem key={id} author={author} content={content} />
        ))
      ) : (
        <Paragraph>У НАС НЕТ ОБЗОРА НА ЭТОТ ФИЛЬМ</Paragraph>
      )}
    </List>
  );
};
