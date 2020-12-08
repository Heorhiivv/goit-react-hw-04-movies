import React, {Component} from "react"
import databaseApi from "../services/databaseApi"
import Spinner from "../components/Spinner/Spinner"
import Cast from "../components/Cast/Cast"

class CastPage extends Component {
  state = {
    persons: [],
    loading: false,
    error: null,
  }

  componentDidMount() {
    this.setState({loading: true})
    databaseApi
      .fetchPerson(this.props.match.params.movieId)
      .then((res) => this.setState({persons: res}))
      .catch((error) => this.setState({error}))
      .finally(() => this.setState({loading: false}))
  }

  render() {
    const {persons, loading, error} = this.state
    return (
      <>
        {error && <p>{error.message}</p>}
        {loading && <Spinner />}
        {persons.length > 0 && !loading && <Cast persons={persons} />}
      </>
    )
  }
}

export default CastPage
