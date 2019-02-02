import React, { PureComponent } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import Colors from '../config/Colors';
import { Icon } from 'native-base';

class FloatButtonComponent extends PureComponent {
    render() {
        const { container, textStyle, ionStyle } = styles;
        return (
            <TouchableOpacity 
            onPress={this.props.onPress}
            style={[container, { backgroundColor: this.props.backgroundColor }]}>
                <Icon
                name={'md-create'} 
                style={ionStyle}
                />
                <Text style={textStyle}>+</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: 50,
        height: 50,
        bottom: 20,
        right: 20,
        backgroundColor: Colors.colorPrimary,
    },
    textStyle: {
        position: 'absolute',
        bottom: 12, 
        right: 15,
        color: Colors.colorWhite,
        fontSize: 12,
    },
    ionStyle: {
        color: Colors.colorWhite
    }
})

export default FloatButtonComponent;