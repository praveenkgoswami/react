let initial = { bookList: [
  { title: 'JavaScript: The Good Parts'},
  { title: 'Codes'},
  { title: 'Jobs'},
  { title: 'Noorah'},
] }

export default function BooksReducer(state = initial, action) {
  switch (action.type) {
    case "FETCH_HISTORY":
    return Object.assign({}, state, { bookList:[]});
    default:
    return state;
  }
}
