
import { call, put } from 'redux-saga/effects'

import { addPokemo } from '../components/Pokemo/pokemoSlice';
import { fetchPikachu } from '../services/pokeapi';

export function* fetchPikachuSaga() {
  const pikachuResult = yield call(fetchPikachu);
  const payload = {
    name: pikachuResult.name,
    abilities: pikachuResult.abilities
  }
  yield put(addPokemo(payload));
}
