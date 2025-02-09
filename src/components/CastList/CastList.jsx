import {
  List,
  Item,
  DescriptionBox,
  Paragraph,
  BoxPhoto,
} from './CastList.styled';
const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';

export const CastList = ({ cast }) => {
  return (
    <List>
      {cast &&
        cast.map(actor => (
          <Item key={actor.id}>
            {actor.profile_path ? (
              <img
                src={`${BASE_URL_IMAGE}${actor.profile_path}`}
                alt={actor.name}
              />
            ) : (
              <BoxPhoto>'Нет фото'</BoxPhoto>
            )}

            <DescriptionBox>
              <Paragraph>{actor.name}</Paragraph>
              <Paragraph>Персонаж: {actor.character}</Paragraph>
            </DescriptionBox>
          </Item>
        ))}
    </List>
  );
};
