import React, { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import Search from "./pages/Search";
import NavBar from "./components/navbar";
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import ExternalApi from "./components/ExternalApi";
import OldLibraryWallpaper from "./assets/OldLibraryWallpaper.jpg"
import styled, { keyframes } from "styled-components";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  // Animated mfing background
  const useMediaQuery = (query) => {
    const mediaMatch = window.matchMedia(query);
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
      const handler = e => setMatches(e.matches);
      mediaMatch.addListener(handler);
      return () => mediaMatch.removeListener(handler);
    });
    return matches;
  };

  const isRowBased = useMediaQuery('(min-width: 500px)');

  console.log("media query info:", isRowBased)

  var slide = keyframes`
from { background-position: 0 0; }
to { background-position: -400px 0 }
`;

  const Container = styled.div`
background: url(${OldLibraryWallpaper}) repeat 0 0;
width: 100%;
margin: 0;
text-align: center;
padding-top: 5px;
box-sizing: border-box;
animation: ${isRowBased ? slide : ""} 30s linear infinite;
`



  return (
    <div className="App">
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <div>
          <Container className="min-h-screen">
            <Switch>
              <PrivateRoute path="/profile" component={Profile} />
              <Route exact path="/home" component={HomePage} />
              <Route exact path="/search" component={Search} />
              <Route path="/" exact component={HomePage} />
              <PrivateRoute path="/external-api" component={ExternalApi} />
            </Switch>
          </Container>
        </div>
      </Router>
    </div>
  );
};

export default App;