import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/nav.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ViewJobs from './screens/viewJobs';
import PostJob from './screens/postJob';
import About from './screens/about';
import Home from './screens/home';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/post-job">
            <PostJob />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/jobs">
            <ViewJobs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
