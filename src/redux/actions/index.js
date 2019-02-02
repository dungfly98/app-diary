import ACTION_TYPES from './ActionTypes';

const changeSizeAction = (size) => {
    return {
        type: ACTION_TYPES.CHANGE_SIZE,
        size
    }
};

const changeColorThemeAction = (color) => {
    return {
        type: ACTION_TYPES.CHANGE_THEME_COLOR,
        color
    }
    
};

const changeColorTextAction = (color) => {
    return {
        type: ACTION_TYPES.CHANGE_TEXT_COLOR,
        color
    }
};

const formatTimeAction = (index) => {
    return {
        type: ACTION_TYPES.SELECTED_TIME,
        index
    }
};

export {
    changeSizeAction,
    changeColorThemeAction,
    changeColorTextAction,
    formatTimeAction
}