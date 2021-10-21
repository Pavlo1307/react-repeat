const initialState = {
    value: 0
}

export const counterReducer = (state = initialState, actoin) =>{
    switch (actoin.type) {
        case 'INC': {
            return {...state, value: state.value + 1}
        }
        default:
            return state
    }
}
