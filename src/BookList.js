import React from 'react'
import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead'
import Read from './Read'

class BookList extends React.Component{
    render(){
        return(
        <div>

        <CurrentlyReading                             
        changeShelf={this.props.changeShelf}
        books = {this.props.books}/>

        <WantToRead                             
        changeShelf={this.props.changeShelf}
        books = {this.props.books}/>

        <Read                             
        changeShelf={this.props.changeShelf}
        books = {this.props.books}/>

        </div>
        )
    }
}

export default BookList