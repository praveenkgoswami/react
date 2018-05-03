import axios from 'axios';

export function bookCliked(title, count) {
  return{
    type: "BOOK_CLICKED",
    title,
    count
  }
}

export function fetchBooks() {
  return (dispatch) => {
    console.log('Fetching history - start');
    const promiseObj = axios.get('../api/booksList.json');

    promiseObj.then((response) => {
      console.log('Success', response);
      dispatch({
        type: "FETCH_HISTORY_SUCCESS",
        bookList: response.data
      });
    });

    promiseObj.catch(error => {
      console.log('Error', error);
    })
  }
}
export function bookAdded(newBook){
  return{
    type: "BOOK_ADDED",
    newBook
  }
}
