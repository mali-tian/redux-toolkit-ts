import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface TodoListState {
  task: string;
  checked: boolean;
}

const initialState: TodoListState[] = []

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<TodoListState>) => {
      state.push(action.payload);
    }
  }
});

export const { addItem } = todoListSlice.actions;

export const todoList = (state: RootState) => state.todoList;

export default todoListSlice.reducer;
