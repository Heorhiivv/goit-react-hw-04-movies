import React, {Component} from "react";
import {Link} from "react-router-dom";
import databaseApi from "../../services/databaseApi";

class HomePage extends Component {
  state = {
    trend: [],
  }

  componentDidMount() {
    databaseApi.fetchTrandingMovies()
    .then(data => this.setState({trend: data.results}))
  }

  render() {
    const {trend} = this.state
    return (
      <>
          <h1> Trending today</h1>
        {trend.length > 0 && (
          <ul>
            {trend.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </>
    )
  }
}

export default HomePage
