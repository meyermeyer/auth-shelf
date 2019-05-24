const storeItemReducer = (state = [], action) => {
    switch (action.type){
        case 'SHOW_ITEMS':
            console.log('in storeItemReducer', action.payload);
            return action.payload;
        default:
            return state;
    }
}

export default storeItemReducer;