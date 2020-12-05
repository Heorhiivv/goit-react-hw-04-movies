import React from 'react';
import css from "./MovieDetails.module.css";


const DetailsPage = ({movieInfo}) => {

  return(
    <>
    <div className={css.about}>
      <img src={`https://image.tmdb.org/t/p/w300/${movieInfo.poster_path}`} alt={movieInfo.title} />

      <div className={css.info}>
        <h2>
          {movieInfo.title} ({Number.parseInt(movieInfo.release_date)})
        </h2>
        <ul>
          <li className={css.infoItem}>User Score: {movieInfo.vote_average * 10} %</li>
          <li className={css.infoItem}>
            <p>
              <b>Overview</b>
            </p>
            {movieInfo.overview}
          </li>

          <li className={css.infoItem}>
            <p>
              <b>Genres</b>
            </p>
            <ul>
              {movieInfo.genres.map((genre) => {
                return <li key={genre.id}>{genre.name}</li>
              })}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </>
  )
}

export default DetailsPage