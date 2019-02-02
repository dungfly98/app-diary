import ACTION_TYPES from '../actions/ActionTypes';
var colorPrimary = null
const ChangeColorReducer = (state = colorPrimary, action) => {
    switch (action.type) {
        case ACTION_TYPES.CHANGE_THEME_COLOR: 
        return state =  action.color;
        default: return state
    }
}

export default ChangeColorReducer;