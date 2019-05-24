import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* watcherSaga(){
    yield takeEvery('DELETE_ITEM', deleteItemSaga)
}
function* deleteItemSaga(action){
    try {
        let url = `/api/shelf/${action.payload.id}`
        console.log(action.payload);
        
        console.log('in deleteItemSaga', action.payload.id);
        axios.delete(url)
    }
    catch (err){
        console.log('error in deleteItemSaga', err);
    }
}
 export default watcherSaga;
