import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* watcherSaga(){
    yield takeEvery('DELETE_ITEM', deleteItemSaga)
}
<<<<<<< HEAD
function* deleteItemSaga(action){
    try {
        let url = `/api/shelf/${action.payload.id}`
        console.log(action.payload);
        
        console.log('in deleteItemSaga', action.payload.id);
        axios.delete(url)
=======
function* deleteItemSaga(){
    try {
        console.log('in deleteItemSaga');
>>>>>>> 5ae1bdad243a67e025dd21604183ddcb45181a23
    }
    catch (err){
        console.log('error in deleteItemSaga', err);
    }
}
<<<<<<< HEAD
 export default watcherSaga;
=======
 export default watcherSaga
>>>>>>> 5ae1bdad243a67e025dd21604183ddcb45181a23
