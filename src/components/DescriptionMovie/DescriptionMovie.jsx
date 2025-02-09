import { Box, Img, Description, Paragraph } from './Description.styled';

const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';

export const DescriptionMovie = ({
  movie: { poster_path, genres, title, release_date, vote_average, overview },
}) => {
  const genresNames = genres.map(({ name }) => name).join(',');

  return (
    <Box>
      <Img>
        <img src={`${BASE_URL_IMAGE}${poster_path}`} alt="" />
      </Img>

      <Description>
        <Paragraph head>
          {title} ({release_date.slice(0, 4)})
        </Paragraph>
        <Paragraph>Рейтинг: {Math.round(vote_average * 10)}%</Paragraph>
        <Paragraph head>Обзор</Paragraph>
        <Paragraph>{overview}</Paragraph>
        <Paragraph head>Жанры</Paragraph>
        <Paragraph>{genresNames}</Paragraph>
      </Description>
    </Box>
  );
};
