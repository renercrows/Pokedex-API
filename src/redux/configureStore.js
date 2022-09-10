import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import useEffectReducer from '../components/SingleCard';
import previewReducer from './pokemons/Pokemons';

const store = configureStore({
  reducer: {
    preview: previewReducer,
    use: useEffectReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
