import React, { Component } from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import { getLoading, getAll } from "../list";

import Spinner from "../../../components/loading/spinner";


export class Page extends Component {
  componentDidMount() {
    this.props.getAll();
  }

  render() {
    const urls = {
      view: `${this.props.match.url}/view/:id`,
      create: `${this.props.match.url}/create`,
      edit: `${this.props.match.url}/update/:id`,
      remove: `${this.props.match.url}/remove/:id`,
    };

    return (
        <Spinner loading={this.props.loading}>

        </ Spinner>
    )
  }
}
