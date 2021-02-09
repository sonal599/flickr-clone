import React, { Component } from "react";
import Group from './Groups'
import "./Group.css";
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid ">
            <a class="navbar-brand mx-auto" href="#">
              React-flickr
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            
          </div>
        </nav>
        <Link to='/groups'>
        <button  type="button" class="btn btn-info btn-sm">Start</button>
        </Link>
      </div>
    );
  }
}
