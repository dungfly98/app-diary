import ACTION_TYPES from '../actions/ActionTypes';
import { arrayTime } from '../../config/DataFake';

const defaultState = {
    arrayFormat: arrayTime,
    nameFormat: arrayTime[0].name
}

const FormatTimeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ACTION_TYPES.SELECTED_TIME: {
            return {
                arrayFormat: state.arrayFormat.map((item, index) => {
                    if (index === action.index) return {
                        ...item,
                        selected: true
                    }
                    return { ...item, selected: false }
                }),
                nameFormat: arrayTime[action.index].name,
            }
        }
        default: return state
    }
}

export default FormatTimeReducer;