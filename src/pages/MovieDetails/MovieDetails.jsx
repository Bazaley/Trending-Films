import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { fetchMovieById } from 'services/requestsForMovies';
import { DescriptionMovie } from 'components/DescriptionMovie/DescriptionMovie';
import { AdditionalInformation } from 'components/AdditionalInformation/AdditionalInformation';
import { LinkStyled, Paragraph } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();

  useEffect(() => {
    const fetch = async () => {
      const { data } = await fetchMovieById(movieId);

      setMovie(data);
    };
    fetch();
  }, [movieId]);
  return (
    <>
      {movie && (
        <>
          <LinkStyled to={location?.state?.from}>
            <AiOutlineArrowLeft />
            Назад
          </LinkStyled>

          <DescriptionMovie movie={movie} />
          <AdditionalInformation />
          <Suspense
            fallback={
              <>
                <Paragraph>Пожалуйста подождите...</Paragraph>
                <ThreeCircles
                  height="100"
                  width="100"
                  color="#e1900e"
                  wrapperStyle={{ justifyContent: 'center' }}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="three-circles-rotating"
                  outerCircleColor=""
                  innerCircleColor=""
                  middleCircleColor=""
                />
              </>
            }
          >
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
