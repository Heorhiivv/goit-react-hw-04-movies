import React, {Component} from "react"
import databaseApi from '../../services/databaseApi';


const withFetch = (url) => (WrappedComponent) => {
  return (
    class WithFetch extends Component {

      state = {
        trend: [],
        loading: false,
        error: null
      }
  
  componentDidMount() {
    databaseApi.fetchTrandingMovies(url)
    .then(res => {console.log('res:', res)
      this.setState({trend: res.results})
    }
      
    )
  }
  
      render() {
        return (<WrappedComponent {...this.props} {...this.state}/>)
      }
    }
  )
}

export default withFetch
