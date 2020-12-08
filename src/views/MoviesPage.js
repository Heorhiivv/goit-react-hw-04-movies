import React, {Component} from "react"
import {Link} from "react-router-dom"
import getQueryParams from "../utils/get-query-params"
import Searchbox from "../components/SearchForm/Searchbox"
import databaseApi from "../services/databaseApi"
import Spinner from "../components/Spinner/Spinner";
import withLog from '../components/hocs/withLog';


class MoviesPage extends Component {
  state = {
    movies: [],
    error: null,
    loading: false,
  }

  componentDidMount() {
    const {query} = getQueryParams(this.props.location.search)
    if (query) {
      this.fetchMovie(query)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const {query: prevQuery} = getQueryParams(prevProps.location.search)
    const {query: nextQuery} = getQueryParams(this.props.location.search)

    if (prevQuery !== nextQuery) {
      this.fetchMovie(nextQuery)
    }
  }

  fetchMovie = (query) => {
    databaseApi.fetchMovieWithQuery(query).then((res) => this.setState({movies: res}))
  }

  handleChangeQuerry = (query) => {
    console.log(query)
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    })
  }

  render() {
    const {movies, error, loading} = this.state
    const {match} = this.props

    return (
      <>
        {error && <p>{error.message}</p>}
        {loading && <Spinner />}
        <Searchbox onSubmit={this.handleChangeQuerry} />
        {movies.length > 0 && !loading && (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `${match.url}/${movie.id}`,
                    state: {from: this.props.location},
                  }}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    )
  }
}

export default withLog(MoviesPage)
