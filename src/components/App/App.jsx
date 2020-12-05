import React, {lazy} from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout/Layout';
import routes from '../../routes';

const MovieDetailsPage = lazy(() => import('../views/MovieDetailsPage' /*webpackChunkName: "movieDetailsPage"*/));
const MoviesPage = lazy(() => import ('../views/MoviesPage' /*webpackChunkName: "moviesPage"*/ ));
const HomePage = lazy(() => import ('../views/HomePage' /*webpackChunkName: "HomePage"*/));

const App = () => (
 <Layout>
    <Switch>
    <Route path={routes.home} exact component={HomePage} />
    <Route path={routes.movies} exact component={MoviesPage} />
    <Route path={routes.movieDetails} component={MovieDetailsPage} />
    </Switch>
  </Layout>
);
export default App

// '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// /movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.