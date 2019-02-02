import { combineReducers } from 'redux';
import changeSizeReducer from './ChangeSizeReducer';
import ChangeColorReducer from './ChangeColorReducer';
import FormatTimeReducer from './FormatTimeReducer';

const reducers = combineReducers({
    changeSizeReducer,
    ChangeColorReducer,
    FormatTimeReducer
})

export default reducers;