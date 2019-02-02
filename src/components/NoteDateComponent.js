import React, { PureComponent } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Icon } from 'native-base';
import Colors from '../config/Colors';
class NoteDateComponent extends PureComponent {
    render() {
        const { container, iconStyle, textStyle } = styles;
        return (
            <TouchableOpacity 
            activeOpacity={0.9}
            onPress={this.props.onPress}
            style={container}>
                <Icon
                    style={iconStyle}
                    name={'md-calendar'}
                />
                <Text style={[textStyle, { fontSize: this.props.textSize, color: this.props.colorText }]}>{this.props.date.toDateString()}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        padding: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        backgroundColor: Colors.colorWhite,
        borderRadius: 7,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconStyle: {
        color: Colors.colorGreyBackground
    },
    textStyle: {
        marginLeft: 15,
    }
})

export default NoteDateComponent;