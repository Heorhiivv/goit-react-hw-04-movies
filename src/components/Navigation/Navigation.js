import React from 'react';
import {NavLink} from 'react-router-dom';
import routes from '../../routes';
import css from './Navigation.module.css';

const Navigation = () => (
  <ul className={css.Navigation}>
    <li className={css.NavigationLink_parent}>
      <NavLink 
      exact to={routes.home} 
      className={css.NavigationLink} 
      activeClassName={css.NavigationLink_active}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink 
      to={routes.movies} 
      className={css.NavigationLink} 
      activeClassName={css.NavigationLink_active}>
        Movies
      </NavLink>
    </li>
  </ul>
)

export default Navigation