import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';
import Navbar from './components/Navbar';
import Posts from './components/pages/Posts';

function App() {
  return (
    <Fragment>
      <GlobalStyle ignore='Navbar' />
      
      <Router>
        <Navbar />
        <Switch>
          <Route
            path='/popular'
            component={() => <Posts orderBy='VOTES' />}
          />
          <Route
            path='/newest'
            component={() => <Posts orderBy='NEWEST' />}
          />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
