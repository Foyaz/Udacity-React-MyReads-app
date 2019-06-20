import React from 'react'
import BookList from './BookList'
import * as BooksAPI from './BooksAPI'


class Main extends React.Component{
    state ={
        books: [],
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        }
        )
    }

    render(){
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  <BookList books={this.state.books}/>
                {/* <BookList books={this.state.books} title="Currently Reading"/>
                <BookList books={this.state.books} title="Want to Read"/>
                <BookList books={this.state.books} title="Read"/> */}
              </div>
            </div>
          </div>

        )
    }
}

export default Main;