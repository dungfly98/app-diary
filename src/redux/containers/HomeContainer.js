import { connect } from 'react-redux';
import HomeScreen from '../../screen/HomeScreen';
import Colors from '../../config/Colors';
import { changeColorThemeAction } from '../actions/index';
import { constant } from '../../config/Constant';

const mapStateToProps = (state) => {
    return {
        backgroundColor: state.ChangeColorReducer ? state.ChangeColorReducer : Colors.colorPrimary,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeColorBackgroud: (color) => {
            dispatch(changeColorThemeAction(color));
        },
    };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

export default HomeContainer;