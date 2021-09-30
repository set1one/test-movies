import React from 'react';
import { BASE_IMG_URl } from '../../api/api';
import './MovieDetails.scss';

type Props = {
  movieDetails: Movie | null;
  setIsDetails: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MovieDetails: React.FC<Props> = (props) => {
  const { movieDetails, setIsDetails } = props;

  return (
    <div>
      {movieDetails && (
        <div className="details">
          <img
            src={`${BASE_IMG_URl}${movieDetails.poster_path}`}
            className="details__image"
            alt="poster_path"
          />
          <div className="details__info">
            <h3 className="details__title">{movieDetails.title}</h3>
            <h5 className="details__title-original">
              <span className="details__span">Original title:</span>
              {` ${movieDetails.original_title}`}
            </h5>
            <h5 className="details__language">
              <span className="details__span">Original language:</span>
              {` ${movieDetails.original_language}`}
            </h5>
            <h5 className="details__popularity">
              <span className="details__span">Popularity:</span>
              {` ${movieDetails.popularity}`}
            </h5>
            <h5 className="details__date">
              <span className="details__span">Release date:</span>
              {` ${movieDetails.release_date}`}
            </h5>
            <div className="details__rating">
              <i className="fas fa-star card__icon"></i>
              <p>
                <span className="details__span">Rating:</span>
                {` ${movieDetails.vote_average}/10 (${movieDetails.vote_count} voice)`}
              </p>
            </div>
            <p className="details__description">
              <span className="details__span">Overview:</span>
              {` ${movieDetails.overview}`}
            </p>
          </div>
          <button
            type="button"
            className="card__button"
            onClick={() => {
              setIsDetails(false);
            }}
          >
            Go back
          </button>
        </div>
      )}
    </div>
  );
};
