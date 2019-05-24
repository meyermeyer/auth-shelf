import axios from 'axios';
import { put,takeEvery } from 'redux-saga/effects';

function* sendItemSaga(action) {
    
    try {
        console.log('here is the post', action.payload);
        yield axios.post('/api/shelf', action.payload)
        yield put({type: 'FETCH_ITEMS' })
     } catch (err) {
        console.log(err);
    }} 
    
  function* watcherSaga() {
      yield takeEvery ('SEND_ITEM',sendItemSaga)
  }

export default watcherSaga;