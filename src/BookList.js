import React from 'react'
import Book from './Book';

class BookList extends React.Component{
    render(){
        return(
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    <Book/>
               </ol>
            </div>
          </div>
        </div>
        )
    }
}

export default BookList