import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks, bookCliked, bookAdded } from '../actions';

class BookList extends Component {
  constructor(props) {
    super (props);

    this.state = {
      newBook: ''
    };
  }

  componentDidMount(){
    this.props.fetchBooksFromStore();
  }

  onChangeNewBook(newBook) {
    this.setState({newBook});
  }

  addnewBook = () => {
    this.props.addBook(this.state.newBook);
    this.setState({ newBook: '' })
  }

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
            placeholder="Add Book"
            value={this.state.newBook}
            onChange={e => this.onChangeNewBook(e.target.value )} />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" onClick={this.addnewBook}>Add</button>
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
    fetchBooksFromStore(){
      dispatch(fetchBooks());
    },
    myBookclicked(title,count){
        dispatch(bookCliked(title,count));
    },
    addBook(newBook){
      dispatch(bookAdded(newBook));
    }
  };
}

BookList.defaultProps = {
  books: [],
  myBookclicked: {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
