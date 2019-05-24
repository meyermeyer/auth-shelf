import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* watcherSaga(){
    yield takeEvery('DELETE_ITEM', deleteItemSaga)
}
function* deleteItemSaga(){
    try {
        console.log('in deleteItemSaga');
    }
    catch (err){
        console.log('error in deleteItemSaga', err);
    }
}
 export default watcherSaga
