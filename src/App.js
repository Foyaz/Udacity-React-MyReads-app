import React from 'react'
import './App.css'
import Search from './Search';
import Main from './Main';
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state ={
    books: [],
}

componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
        this.setState({books})
    })
}

changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    BooksAPI.getAll().then((books) => {
        this.setState({books})
    })
}
  render() {
    return (
      <div className="app">
        <Main
        books = {this.state.books}
        changeShelf = {this.changeShelf}/>
        <Search
        books = {this.state.books}
        changeShelf={this.changeShelf}/>
      </div>
    )
  }
}

export default BooksApp
