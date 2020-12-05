import React, { Component } from "react";
import Loader from "react-loader-spinner";
import css from '../Spinner/Spinner.module.css';

class Spinner extends Component {
  render() {
    return (
      <Loader className={css.spinner}
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }
}
export default Spinner;