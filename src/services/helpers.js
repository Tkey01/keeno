export const movieFieldsMap = {
  vote_average: 'voteAverage',
  vote_count: 'voteCount',
  release_date: 'year',
  original_title: 'titleEN',
  production_countries: 'countries',
};

export const remapMovieFields = movie => (
  Object.keys(movie).reduce((newFields, field) => {
    const newField = movieFieldsMap[field] || field;
    return { ...newFields, [newField]: movie[field] };
  }, {})
);

export const rateConvert = (rate) => {
  const rate2 = Math.round((rate / 2) * 10) / 10;
  const intPart = Math.floor(rate2);
  const fractPart = Math.round((rate2 - intPart) * 10) / 10;

  const arrStar = [];

  for (let i = 0; i < intPart; i++) {
    arrStar[i] = 100;
  }

  if (intPart < 5 && fractPart) {
    arrStar[intPart] = fractPart * 100;
  }

  return arrStar;
};

export const rateCount = rate => Math.round((rate / 2) * 10) / 10;
