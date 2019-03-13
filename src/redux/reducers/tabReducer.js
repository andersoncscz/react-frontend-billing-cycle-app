import { SELECT_TAB, SHOW_TABS } from "../actions/tabActions";

const INITIAL_STATE = {
    selected: ''
}

const tabReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_TAB:
            return {...state, selected: action.tabId}
        
        case SHOW_TABS:
            return {...state, visible: action.tabsToShow}
    
        default:
            return state;
    }
}

export default tabReducer;