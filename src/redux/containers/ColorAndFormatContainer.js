import { connect } from 'react-redux';
import ColorAndFormatScreen from '../../screen/ColorAndFormatScreen';
import { changeSizeAction, changeColorThemeAction, changeColorTextAction, formatTimeAction } from '../actions/index';
import Colors from '../../config/Colors';
import { arrayTime } from '../../config/DataFake';

const mapStateToProps = (state) => {
    return {
        size: state.changeSizeReducer.size ? state.changeSizeReducer.size : 14,
        textColor: state.changeSizeReducer.color ? state.changeSizeReducer.color : Colors.coloBlack,
        backgroundColor: state.ChangeColorReducer ? state.ChangeColorReducer : Colors.colorPrimary,
        arrayFormatTime: state.FormatTimeReducer.arrayFormat ? state.FormatTimeReducer.arrayFormat : arrayTime,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeSize: (size) => {
            dispatch(changeSizeAction(size));
        },
        onChangeColorBackgroud: (color) => {
            dispatch(changeColorThemeAction(color));
        },
        onChangeTextColor: (color) => {
            dispatch(changeColorTextAction(color));
        },
        onFormatTimePress: (index) => {
            dispatch(formatTimeAction(index));
        },
    };
};

const ColorAndFormatContainer = connect(mapStateToProps, mapDispatchToProps)(ColorAndFormatScreen);

export default ColorAndFormatContainer;