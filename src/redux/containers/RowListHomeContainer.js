import { connect } from 'react-redux';
import RowListHomeCompoment from '../../components/RowListHomeCompoment';
import Colors from '../../config/Colors';
import { changeSizeAction, changeColorTextAction } from '../actions/index';

const mapStateToProps = (state) => {
    return {
        size: state.changeSizeReducer.size ? state.changeSizeReducer.size : 14,
        textColor: state.changeSizeReducer.color ? state.changeSizeReducer.color : Colors.coloBlack,
        nameFormat: state.FormatTimeReducer.nameFormat ? state.FormatTimeReducer.nameFormat : constant.DAYS,
    };
};

const mapDisPatchToProps = (dispatch) => {
    return {
        onChangeSize: (size) => {
            dispatch(changeSizeAction(size));
        },
        onChangeTextColor: (color) => {
            dispatch(changeColorTextAction(color));
        },
    }
}

const RowListHomeContainer = connect(mapStateToProps, mapDisPatchToProps)(RowListHomeCompoment);

export default RowListHomeContainer;