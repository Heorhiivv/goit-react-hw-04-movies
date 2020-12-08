import React, {Component} from "react";
import databaseApi from "../services/databaseApi";
import Spinner from "../components/Spinner/Spinner";
import Reviews from "../components/Reviews/Reviews";

class ReviewsPage extends Component {
  state = {
    reviews: [],
    loading: false,
    error: null,
  }

  componentDidMount() {
    this.setState({loading: true})
    databaseApi
      .fetchReviews(this.props.match.params.movieId)
      .then((res) => this.setState({reviews: res}))
      .catch((error) => this.setState({error}))
      .finally(() => this.setState({loading: false}))
  }

  render() {
    const {reviews, loading, error} = this.state
    return (
      <>
        {error && <p>{error.message}</p>}
        {loading && (
          <Spinner />
        )}
        {reviews.length > 0 && !loading && <Reviews reviews={reviews} />}
      </>
    )
  }
}

export default ReviewsPage
