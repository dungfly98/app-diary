import React, { PureComponent } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Icon } from 'native-base';
import Colors from '../config/Colors';

class TextInputTitleComponent extends PureComponent {
    render() {
        const { container, iconStyle, textStyle } = styles;
        return (
            <View style={container}>
                <Icon
                    style={iconStyle}
                    name={'md-create'}
                />
                <TextInput
                placeholder={this.props.placeholder}
                onChangeText={this.props.onChangeText}
                underlineColorAndroid={ 'transparent'}
                value={this.props.value} 
                style={[textStyle, { color: this.props.colorText, fontSize: this.props.textSize }]}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        backgroundColor: Colors.colorWhite,
        borderRadius: 7,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconStyle: {
        marginLeft: 10,
        color: Colors.colorGreyBackground
    },
    textStyle: {
        width: '100%',
        marginLeft: 15, 
        height: '100%'
    }
})

export default TextInputTitleComponent;