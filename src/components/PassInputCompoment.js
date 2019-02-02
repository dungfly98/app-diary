import React, { PureComponent } from 'react';
import { View, StyleSheet, Image, TextInput } from 'react-native';
import { Icon } from 'native-base';
import Colors from '../config/Colors';
class PassInputCompoment extends PureComponent {
    render() {
        const { 
            container, 
            viewPassword, 
            viewEmail, 
            viewEmailAuthentication,
            imagePasswordStyle,
            textinputPass,
            imageEmailStyle,
            textinputEmail,
            imageEmailAuthenticationStyle,
            textinputEmailAuthentication,
        } = styles; 
        return (
            <View style={container}>
                <View style={viewPassword}>
                    <Icon
                        name = 'ios-key-outline'
                        style={imagePasswordStyle}
                    />
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={textinputPass}
                        placeholder="Nhập mã"
                        onChangeText={this.props.onChangePassText}
                        secureTextEntry={true}
                    />
                </View>
                <View style={viewEmail}>
                    <Icon
                        name = 'ios-mail-outline'
                        style ={imageEmailStyle}
                    />
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={textinputEmail}
                        placeholder="Nhập Email"
                        onChangeText={this.props.onChangeEmailText}
                    />
                </View>
                <View style={viewEmailAuthentication}>
                    <Icon
                        name = 'ios-mail-outline'
                        style ={imageEmailAuthenticationStyle}
                    />
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={textinputEmailAuthentication}
                        placeholder="Nhập lại Email"
                        onChangeText={this.props.onChangeEmailAgainText}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.colorWhite,  
        borderRadius: 5,  
        padding: 10,  
        margin: 30, 
    },   
    viewPassword: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center', 
        alignItems: 'center',
        borderBottomWidth: 1, 
        borderBottomColor: '#cecece',
    },
    viewEmail: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cecece',
    },
    viewEmailAuthentication: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagePasswordStyle: {
        padding: 3,
        color: 'grey',
        fontSize: 28
    },
    textinputPass: {
        flex: 1,
        padding: 3
    },
    imageEmailStyle: {
        padding: 3,
        color: 'grey'
    },
    textinputEmail: {
        flex: 1,
        padding: 3
    },
    imageEmailAuthenticationStyle: {
        padding: 3,
        color: 'grey'
    },
    textinputEmailAuthentication: {
        flex: 1,
        padding: 3
    }
})
export default PassInputCompoment; 