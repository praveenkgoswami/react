export function bookCliked(title, count) {
  return{
    type: "BOOK_CLICKED",
    title,
    count
  }
}
