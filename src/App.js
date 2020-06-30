import React from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/home/Landing';
import Movie from './components/home/Movie';

import store from './Store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <div>
                <Navbar />
                <Route exact component={Landing} path="/" />
                <Route exact path="/movie/:id" component={Movie} />
                <Footer />
            </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
