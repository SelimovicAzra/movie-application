import React from 'react';
import styled from 'styled-components';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom'
import MediaDetails from './components/MediaDetails';

const AppWrapper = styled('div')({

});

const NavWrap = styled('div')({

});
const App: React.FC = () => {
  return (
    <AppWrapper>
      <BrowserRouter>
        <NavWrap>
          <NavLink to="/">
            TVShows
          </NavLink>
          <NavLink to="/movies">
            MOVIES
          </NavLink>
        </NavWrap>
        <Switch>
          <Route path="/:mediaType/:id">
            <MediaDetails />
          </Route>    
           <Route path="/">
            <TVShows />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
        </Switch>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
