import ACTION_TYPES from '../actions/ActionTypes';
import Colors from '../../config/Colors';
const configText = {
    size: 14,
    color: Colors.coloBlack
}
const changeSizeReducer = (stateConfigText = configText, action) => {
    switch (action.type) {
        case ACTION_TYPES.CHANGE_SIZE: 
        return stateConfigText = {
            ...stateConfigText,
            size: action.size + 14
        }

        case ACTION_TYPES.CHANGE_TEXT_COLOR: 
        return stateConfigText = {
            ...stateConfigText,
            color: action.color
        }

        default: return stateConfigText;
    }
}

export default changeSizeReducer;