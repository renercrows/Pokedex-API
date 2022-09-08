import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial State
const initialState = [];

// Base URL
const url = 'https://pokeapi.co/api/v2/pokemon/';

// Async Thunk
export const fetchApi = createAsyncThunk('preview/fetchApi', async () => {
  const response = await axios.get(url);
  return response.data;
});

// Slice Reducer
const previewSlice = createSlice({
  name: 'preview',
  initialState,
  reducers: {
    updateImg: {
      reducer: (state, action) => (state.map((el) => (el.id === action.payload.id ? (
        {
          id: action.payload.id,
          name: action.payload.name,
          img: action.payload.img,
        }
      ) : el))),
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApi.fulfilled, (state, action) => {
      const pokemons = action.payload.results.map((el, index) => ({
        id: `${index + 1}`,
        name: el.name,
        img: '',
      }));
      return pokemons;
    });
  },
});

export const { updateImg } = previewSlice.actions;
export default previewSlice.reducer;
