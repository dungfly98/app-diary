import { connect } from 'react-redux';
import FloatButtonComponent from '../../components/FloatButtonComponent';
import Colors from '../../config/Colors';

const mapStateToProps = (state) => {
    return {
        backgroundColor: state.ChangeColorReducer ? state.ChangeColorReducer : Colors.colorPrimary,
    };
};

const FloatButtonContainer = connect(mapStateToProps)(FloatButtonComponent);

export default FloatButtonContainer;