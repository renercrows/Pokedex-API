import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import previewReducer from './pokemons/Pokemons';

const store = configureStore({
  reducer: {
    preview: previewReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
