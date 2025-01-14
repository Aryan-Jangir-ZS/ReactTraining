
const initialState = { count: 0 };

const reducer = ( state , action ) => {
    switch ( action.type ){
        case "increment":
            return { count : state.count +1 };
        case "decrement":
            return { count : state.count -1 };
        case "reset":
            return initialState;
        default:
            return { count: state.count };
    }
}

export { initialState, reducer };

