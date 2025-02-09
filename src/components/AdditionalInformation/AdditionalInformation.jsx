import { useLocation } from 'react-router-dom';
import { MdOutlineReviews, MdOutlineCastConnected } from 'react-icons/md';
import { GiFilmStrip } from 'react-icons/gi';
import { animateScroll as scroll } from 'react-scroll';
import { NavLinkStyled, List, Span } from './AdditionalInformation.styled';

export const AdditionalInformation = () => {
  const location = useLocation();

  return (
    <List>
      <li>
        <NavLinkStyled
          onClick={() => scroll.scrollTo(650)}
          to="cast"
          state={{ from: location?.state?.from }}
        >
          <Span>В ролях</Span>
          <MdOutlineCastConnected />
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled
          onClick={() => scroll.scrollTo(650)}
          to="reviews"
          state={{ from: location?.state?.from }}
        >
          <Span>Обзор</Span>
          <MdOutlineReviews />
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled
          onClick={() => scroll.scrollTo(650)}
          to="trailer"
          state={{ from: location?.state?.from }}
        >
          <Span>Трейлер</Span>
          <GiFilmStrip />
        </NavLinkStyled>
      </li>
    </List>
  );
};
