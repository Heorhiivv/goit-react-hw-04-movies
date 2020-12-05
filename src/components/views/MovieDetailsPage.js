import React, {Component} from "react"
import databaseApi from "../../services/databaseApi"
import routes from "../../routes"

import {Route, Link} from "react-router-dom"
import CastPage from "../views/Cast"
import ReviewsPage from "../views/Reviews"

import css from "../DetailsPage/MovieDetails.module.css"
import Spinner from "../Spinner/Spinner"
import DetailsPage from "../DetailsPage/DetailsPage"

class MovieDetailsPage extends Component {
  state = {
    movieInfo: null,
    loading: false,
    error: null,
  }

  componentDidMount() {
    const {match} = this.props
    databaseApi
      .fetchMovieDetails(match.params.movieId)
      .then((movieInfo) => this.setState({movieInfo}))
      .catch((error) => this.setState({error}))
      .finally(() => this.setState({loading: false}))
  }

  handleBack = () => {
    const {state} = this.props.location
    if (state && state.from) {
      return this.props.history.push(state.from)
    }
    this.props.history.push(routes.home)
  }

  render() {
    const {movieInfo, loading, error} = this.state
    const {match} = this.props

    return (
      <>
        <button className={css.backButton} type="button" onClick={this.handleBack}>
          <p>Go Back</p>
        </button>
        <br />
        {error && <p>{error.message}</p>}
        {loading && <Spinner />}
        {movieInfo && !loading && (
          <>
            <DetailsPage movieInfo={movieInfo} />

            <p>Aditional Informations</p>
            <div className={css.aditional}>
              <Link
                to={{
                  pathname: `${match.url}/cast`,
                  state: {
                    from:
                      this.props.location.state && this.props.location.state.from ? this.props.location.state.from : "",
                  },
                }}
                className={css.Cast}
              >
                <p>Cast</p>
              </Link>
              <Link
                to={{
                  pathname: `${match.url}/reviews`,
                  state: {
                    from:
                      this.props.location.state && this.props.location.state.from ? this.props.location.state.from : "",
                  },
                }}
                className={css.Reviews}
              >
                <p>Reviews</p>
              </Link>
            </div>

            <Route path={`${match.path}/cast`} component={CastPage} />
            <Route path={`${match.path}/reviews`} component={ReviewsPage} />
          </>
        )}
      </>
    )
  }
}

export default MovieDetailsPage
