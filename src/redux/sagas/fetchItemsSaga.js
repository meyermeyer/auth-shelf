import axios from 'axios';
import { put } from 'redux-saga/effects';

function* fetchItemSaga(){
    try {
        
        
        const allItems = yield axios.get('/api/shelf')
          yield put({type:'SHOW_ITEMS', payload:allItems.data})  
        console.log('in fetchItemSaga', allItems);
        
    }
    catch(err){
        console.log(err);
    }
}

export default fetchItemSaga;