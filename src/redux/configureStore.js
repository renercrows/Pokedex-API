import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import previewReducer from './pokemons/Pokemons';
import SingleCardReducer from '../components/SingleCard';

const store = configureStore({
  reducer: {
    preview: previewReducer,
    use: SingleCardReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
