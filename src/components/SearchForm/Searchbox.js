import React, {Component} from "react";
import PropTypes from "prop-types";

class Searchbox extends Component {
  state = {
    value: "",
  }

  // handleChange = ({target}) => {
  //   const {name, value} = target;
  //   this.setState({[name]: value});
  // };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.value)
    this.setState({value: ""})
  }

  render() {
    // const {value} = this.state.value

    return (
      
      <form className="SearchForm" onSubmit={this.handleSubmit}>
        <input
          className="SearchForm_input"
          type="text"
          placeholder="Search"
          // name="value"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit" className="SearchForm_button">
          Search..
        </button>
      </form>
    )
  }
}
Searchbox.defaultProps = {
  onSubmit: PropTypes.func.isRequired,
}

export default Searchbox
