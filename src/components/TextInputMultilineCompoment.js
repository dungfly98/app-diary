import React, { PureComponent } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Colors from '../config/Colors';

class TextInputMultilineCompoment extends PureComponent {

    render() {
        const { container, textStyle } = styles;
        return (
            <View style={container}>
                <TextInput
                    placeholder={this.props.placeholder}
                    onChangeText={this.props.onChangeText}
                    underlineColorAndroid={'transparent'}
                    style={{ color: this.props.colorText, fontSize: this.props.textSize }}
                    multiline={true}
                    value={this.props.value}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 7, 
        margin: 15,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: Colors.colorWhite,
    },
})

export default TextInputMultilineCompoment;