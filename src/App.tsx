import React, { useState, useEffect } from 'react';
import { MovieList } from './components/MovieList';
import { FindMovie } from './components/FindMovie';
import { getPopularMovie } from './api/api';
import './App.scss';
import './reset.scss';

export const App: React.FC = () => {
  const [data, setData] = useState<MovieList | null>(null);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setIsLoad(true);

    (async () => {
      const moviesFromServer = await getPopularMovie();

      setIsLoad(false);
      setData(moviesFromServer);
    })();
  }, []);

  return (
    <div className="movies">
      <h1 className="movies__title">Movies</h1>
      <div className="movies__wrapper">
        <FindMovie setData={setData} setIsLoad={setIsLoad} />
        {data?.results.length === 0
          ? (
            <div className="movies__error-box">
              <span className="movies__error-span">
                Movie not found :(
              </span>
              <p className="movies__error">
                <br />
                Please check that you spelled the movie correctly
              </p>
            </div>
          )
          : <MovieList data={data} isLoad={isLoad} />}
      </div>
    </div>
  );
};
