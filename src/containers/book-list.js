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
          onClick={()=> this.props.myBookclicked(book.title, book.count)}>
          {book.title}, {book.count}
        </li>
      );
    });
  }
  render(){
    return(
      <div>
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
        <div className="">
          <div className="input-group">
            <input className="form-control"
            placeholder="Add Book"/>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">Add</button>
            </div>
          </div>
        </div>
      </div>
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
    myBookclicked(title,count){
        dispatch(bookCliked(title,count));
    }
  };
}

BookList.defaultProps = {
  books: [],
  myBookclicked: {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
