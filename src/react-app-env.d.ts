/// <reference types="react-scripts" />

interface Movie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  adult: boolean;
  release_date: string;
  original_title: string;
  original_language: string;
  title: string;
  overview: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
};

interface MovieList {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
};