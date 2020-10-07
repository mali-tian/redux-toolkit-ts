import { configureStore, ThunkAction, Action, MiddlewareArray } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import counterReducer from '../features/counter/counterSlice';
import todoListSlice from '../components/TodoList/todoListSlice';
import pokemoSlice from '../components/Pokemo/pokemoSlice';
import * as rootSagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todoList: todoListSlice,
    pokemo: pokemoSlice
  },
  middleware: new MiddlewareArray().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSagas.fetchPikachuSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
