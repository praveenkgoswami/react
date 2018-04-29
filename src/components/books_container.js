import React, { Component } from 'react';
import BookList from '../containers/book-list';

export default class BooksContainer extends Component {
  render(){
    return(
      <div className="books-container">
        <h2 className="text-center">Books List</h2>
        <BookList />
      </div>
    )
  }
}
