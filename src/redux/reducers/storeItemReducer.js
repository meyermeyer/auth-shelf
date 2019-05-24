const storeItemReducer = (state = [], action) => {
    switch (action.type){
        case 'SHOW_ITEMS':
        return action.payload;
        default:
        return state;
    }
}