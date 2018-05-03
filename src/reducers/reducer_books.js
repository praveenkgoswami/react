// let initial = { bookList: [
//   { title: 'JavaScript: The Good Parts', count: 1},
//   { title: 'Codes', count: 1},
//   { title: 'Jobs', count: 1},
//   { title: 'Noorah', count: 1}
// ] }

export default function BooksReducer(state = {}, action) {
  switch (action.type) {
    // case "FETCH_HISTORY":
    // return Object.assign({}, state, { bookList:[]});
    case "FETCH_HISTORY_SUCCESS":
    return {
      ...state,
      bookList: action.bookList
    }
    case "BOOK_CLICKED":
      const index = state.bookList.findIndex(
        book => book.title === action.title
      );
    if( index > -1 ){
      const bookList = [...state.bookList];
      bookList[index].count += 1;
      console.log('book clicked', action.title, action.count+1);
      return { ...state, bookList};
    }
    return state;
    case "BOOK_ADDED":
      const bookList = [...state.bookList];
      bookList.push({title: action.newBook, count: 1})
    return { ...state, bookList};
    default:
    return state;
  }
}
