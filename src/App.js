import React from 'react'
import './App.css'
import Search from './Search';
import Main from './Main';
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' component={Main}/>
        <Route exact path='/search' component={Search}   />
      <div className="open-search">
         {/* <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button> */}
      </div>
      </div>
    )
  }
}

export default BooksApp
