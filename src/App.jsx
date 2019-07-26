import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import routes from './routes'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className=''>
          <Header />
          <div className='component-wrap'>
            {routes}
          </div>
        </div>
      </HashRouter>
    );
  }
}

