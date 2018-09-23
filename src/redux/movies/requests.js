import { api } from '../../services/api';

export const requestNowPlayingMovies = (page, genre, sortBy) => api.get(`discover/movie?page=${page}${sortBy ? `&sort_by=${sortBy}` : ''}${genre ? `&with_genres=${genre}` : ''}`);

export const requestTop100 = (page, genre, sortBy) => api.get(`discover/movie?page=${page}&sort_by=${sortBy ? `${sortBy}` : 'vote_average.desc'}${genre ? `&with_genres=${genre}` : ''}`);

export const requestMoviesByKeywords = req => api.get(`search/movie?query=${req}`);

export const requestMovieById = id => api.get(`movie/${id}`);

export const requestMovieVideos = id => api.get(`movie/${id}/videos`);

export const requestSimilarMovies = id => api.get(`movie/${id}/similar`);

export const requestCredits = id => api.get(`movie/${id}/credits`);
