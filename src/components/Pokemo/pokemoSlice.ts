import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface PokemoState {
  name: string;
  abilities: string[];
}

const initialState: PokemoState[] = []

export const pokemoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addPokemo: (state, action: PayloadAction<PokemoState>) => {
      state.push(action.payload);
    }
  }
});

export const { addPokemo } = pokemoSlice.actions;

export const pokemo = (state: RootState) => state.pokemo;

export default pokemoSlice.reducer;
