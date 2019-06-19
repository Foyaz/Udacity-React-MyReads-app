import React from 'react'
//import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search';
import Main from './Main';

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search/>
        ) : (
          <Main/>
        )}
      <div className="open-search">
         <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
      </div>
      </div>
    )
  }
}

export default BooksApp
