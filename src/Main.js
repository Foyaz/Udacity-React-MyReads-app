import React from 'react'
import BookList from './BookList'

class Main extends React.Component{
    render(){
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookList/>
              </div>
            </div>
          </div>

        )
    }
}

export default Main;