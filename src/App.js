import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import Now from './Pages/Now';
import Popular from './Pages/Popular';
import Top from './Pages/Top';
import Upcoming from './Pages/Upcoming';
import './App.css';

function Home() {
  return <h2>Home</h2>;
}


function Navbar() {
  return (
    <div className="fija">
      <Link to="/">Home | </Link>
      <Link to="/now">Now | </Link>
      <Link to="/popular">Popular | </Link>
      <Link to="/top">Top | </Link>
      <Link to="/upcoming">Upcoming </Link>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Router>
          <Switch>
            <Route exact path="/"> <Home /> </Route>
            <Route exact path="/now"><Now /> </Route>
            <Route exact path="/popular"><Popular /> </Route>
            <Route exact path="/top"><Top /> </Route>
            <Route exact path="/upcoming"><Upcoming /></Route>
            <Redirect from="*" to="/" />
          </Switch>
          <Navbar />
        </Router>


      </header>
    </div>
  );
}

export default App;
