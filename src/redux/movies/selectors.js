/* eslint-disable */
export const getSearchResults = state => state.movies.searchResults.map(({ id, title }) => ({ id, name: title }));

export const getMovieById = state => state.movies.movie;

export const getVideo = state => state.movies.video;

export const getSimilar = state =>
  state.movies.similar.map(
    ({
      backdrop_path,
      id,
      title,
      overview,
      release_date,
      vote_average,
      vote_count
    }) => ({
      bg: `https://image.tmdb.org/t/p/original${backdrop_path}`,
      description: overview,
      year: release_date,
      voteAverage: vote_average,
      voteCount: vote_count,
      id,
      title
    })
  );

/* eslint-enable */

export const getFavouriteMovies = list => Object.keys(list).filter(key => list[key]);

export const getState = state => state.movies;

export const getGenres = state => state;
