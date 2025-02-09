import { useState, useEffect } from 'react';
import { PageHeading } from 'components/PageHeading/PageHeading';
import { fetchTrendingMovies } from 'services/requestsForMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { debounce } from 'debounce';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    try {
      const fetch = async () => {
        const {
          data: { results },
        } = await fetchTrendingMovies(currentPage);

        setMovies(state => [...state, ...results]);
      };
      fetch();
    } catch (error) {
      console.log(error);
    }
  }, [currentPage]);

  useEffect(() => {
    const scrollHandler = e => {
      if (
        e.target.documentElement.scrollHeight ===
        e.target.documentElement.scrollTop + window.innerHeight
      ) {
        setCurrentPage(state => state + 1);
      }
    };

    document.addEventListener('scroll', debounce(scrollHandler, 200));
    return () => document.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <>
      <PageHeading text="Сегодня в тренде" />
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
