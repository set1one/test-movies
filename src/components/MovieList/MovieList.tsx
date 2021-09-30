import React from 'react';
import { Loader } from '../Loader';
import { MovieCard } from '../MovieCard';
import './MovieList.scss';

type Props = {
  data: MovieList | null;
  isLoad: boolean;
};

export const MovieList: React.FC<Props> = (props) => {
  const { data, isLoad } = props;

  return (
    <div className="movie-wrapper">
      {isLoad
        ? <Loader />
        : data?.results.map(movie => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
    </div>
  );
};
