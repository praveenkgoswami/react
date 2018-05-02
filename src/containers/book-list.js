import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bookCliked } from '../actions';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return(
        <li
          key={book.title}
          className="list-group-item"
          onClick={()=> this.props.myBookclicked(book.title)}>
          {book.title}, {book.count}
        </li>
      );
    });
  }
  render(){
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return{
    books: state.books.bookList
  };
}

function mapDispatchToProps(dispatch) {
  return{
    myBookclicked(title){
        dispatch(bookCliked(title));
    }
  };
}

BookList.defaultProps = {
  books: [],
  myBookclicked: {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
