import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_activebook'

const rootReducer = combineReducers({

  books:BooksReducer,    //this will be available in our global state as activeBook

  activeBook:ActiveBook

});

export default rootReducer;
