export function selectBook(book) {

//select book is an action creator it needs to retuen an action
//an object with usually an object with 2 properties : 1) type 2)some data(payload)
 return {
   type : 'BOOK_SELECTED',
   payload : {
     title:book.title,
     author:book.author

   }
 };

}
