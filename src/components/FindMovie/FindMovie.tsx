import React, { useState } from 'react';
import { getFoundMovie, getPopularMovie } from '../../api/api';
import './FindMovie.scss';

type Props = {
  setData: React.Dispatch<React.SetStateAction<MovieList | null>>;
  setIsLoad: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FindMovie: React.FC<Props> = (props) => {
  const { setData, setIsLoad } = props;
  const [name, setName] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const findMovie = async () => {
    setIsLoad(true);
    if (name.length > 0) {
      const foundMovieFromServer = await getFoundMovie(name);

      setData(foundMovieFromServer);
    } else {
      const foundMovieFromServer = await getPopularMovie();

      setData(foundMovieFromServer);
    }

    setIsLoad(false);
  };

  return (
    <div>
      <form className="form">
        <input
          type="text"
          value={name}
          className="form__name"
          placeholder="name"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="form__button"
          onClick={(event) => {
            event.preventDefault();
            findMovie();
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};
