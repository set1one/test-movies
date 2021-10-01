import React, { useEffect, useState } from 'react';
import './MovieCard.scss';
import { BASE_IMG_URl, getMovieDetails } from '../../api/api';
import { MovieDetails } from '../MovieDetails';

type Props = {
  movie: Movie;
};

export const MovieCard: React.FC<Props> = (props) => {
  const { movie } = props;
  const [movieDetails, setMovieDetails] = useState<Movie | null>(null);
  const [isDetails, setIsDetails] = useState(false);

  useEffect(() => {
    (async () => {
      const movieDetailsFromServer = await getMovieDetails(movie.id);

      setMovieDetails(movieDetailsFromServer);
    })();
  }, [isDetails]);

  return (
    <div className="card">
      <img
        src={`${BASE_IMG_URl}${movie.poster_path}`}
        className="card__image"
        alt="poster_path"
      />
      {movie.adult
        ? <div className="card__adult">+18</div>
        : null}
      <div className="card__body">
        <div className="card__top">
          <h5 className="card__title">{movie.title}</h5>
          <div className="card__rating">
            <i className="fas fa-star card__icon"></i>
            <p>{movie.vote_average}</p>
          </div>
        </div>
        <h6 className="card__popularity">{`(${movie.popularity})`}</h6>
        {movie.overview
          ? <p className="card__description">{movie.overview}</p>
          : <p className="card__description">Sorry, but this movie hasnt overview</p>}
        <button
          type="button"
          className="card__button"
          onClick={() => {
            setIsDetails(true);
          }}
        >
          View Details
        </button>
        {isDetails
          ? <MovieDetails movieDetails={movieDetails} setIsDetails={setIsDetails} />
          : null}
      </div>
    </div>
  );
};
