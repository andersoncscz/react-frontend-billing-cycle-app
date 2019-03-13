import { GET_LIST } from '../actions/billingCycleActions';
const INITIAL_STATE = {
    list: []
}

const billingCycleReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_LIST:
        const { list } = action;
            return {...state, list };
        default:
            return state;
    }
}

export default billingCycleReducer;