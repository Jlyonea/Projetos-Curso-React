import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';
import notesReducer from './notesSlice';

export default configureStore({
  reducer: {
    books: booksReducer,
    notes: notesReducer
  }
})