import React, { Component } from 'react';
import BookList from '../containers/book-list';

export default class BooksContainer extends Component {
  render(){
    return(
      <div className="books-container">
        Books List
        <BookList />
      </div>
    )
  }
}
