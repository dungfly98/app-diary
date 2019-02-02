import { connect } from 'react-redux';
import SlineMenuComponent from '../../components/SlineMenuComponent';
import Colors from '../../config/Colors';

const mapStateToProps = (state) => {
    return {
        backgroundColor: state.ChangeColorReducer ? state.ChangeColorReducer : Colors.colorPrimary,
    };
};

const SlineMenuContainer = connect(mapStateToProps)(SlineMenuComponent);

export default SlineMenuContainer;