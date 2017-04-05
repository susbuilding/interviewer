'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AllPuppies from './AllPuppies';
import SinglePuppyContainer from './SinglePuppyContainer';
import AllPuppiesContainer from './AllPuppiesContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar';
import QuestionButton from './QuestionButton';
import Store from './store.js';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { AsyncReceivePuppies, asyncSelectPuppy } from './action-creators'
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <div>
      <div>
        <NavBar />
      </div>
      <div className="container flexbox-container">
        <div className="jumbotron">
          <QuestionButton />
        </div>
      </div>
    </div>
  </MuiThemeProvider>,
    document.getElementById('app')
);

//<div className="container flexbox-container">
//   <div className="jumbotron">
//     <AllPuppiesContainer />
//   </div>
// </div>
