import { combineReducers } from 'redux';

import dashboardReducer from './dashboardReducer';
import billingCycleReducer from './billingCycleReducer';
import tabReducer from './tabReducer';

import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    billingCycle: billingCycleReducer,
    tab: tabReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer;