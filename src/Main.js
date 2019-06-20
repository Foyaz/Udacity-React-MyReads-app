import React from 'react'
import BookList from './BookList'
import {Link} from 'react-router-dom'

class Main extends React.Component{
    render(){        
        return(
            <>
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  <BookList 
                  books={this.props.books}
                  changeShelf={this.props.changeShelf}/>
              </div>
            </div>
          </div>
          <div className="open-search">
        <Link to='/search'>         
        <button>Add a book</button>
        </Link>
      </div>
          </>
        )
    }
}

export default Main;