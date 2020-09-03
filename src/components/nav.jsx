import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to='/'><a className="navbar-brand" href="#">Cryptlance</a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to='/home'><a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a></Link>
            </li>
            <li className="nav-item active">
              <Link to='/post-job'><a className="nav-link" href="#">Post&nbsp;a&nbsp;Job</a></Link>
            </li>
            <li className="nav-item active">
              <Link to='/jobs'><a className="nav-link" href="#">Browse&nbsp;Jobs</a></Link>
            </li>
          </ul>
        </div>

        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Sign In</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Register</a>
                </li>
            </ul>
        </div>
      </nav>
    );
}