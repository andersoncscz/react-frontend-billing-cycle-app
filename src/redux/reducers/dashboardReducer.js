import { GET_SUMMARY } from '../actions';
const INITIAL_STATE = {
    summary: {
        credit: 0,
        debt: 0
    }
}

const dashboardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_SUMMARY:
            const { credit, debt } = action;
            return {...state, summary: { credit, debt} };
        default:
            return state;
    }
}

export default dashboardReducer;