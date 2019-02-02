import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, KeyboardAvoidingView, Alert, Keyboard } from 'react-native';
import Colors from '../config/Colors';
import asyncStorage from '../database/AsyncStorage';
import HeaderComponent from '../components/HeaderComponent';
import { routeName } from '../config/Constant';
class FeedBackScreen extends PureComponent {

    static navigationOptions = {
        header: null,
    }

    constructor(props){
        super(props)
        this.onBackPress = this.onBackPress.bind(this)
        this.onSendPress = this.onSendPress.bind(this)
        this.onChangeText = this.onChangeText.bind(this)
        this.state = {
            text: '',
            colorPrimary: Colors.colorPrimary
        }
    }

    render(){
        const { container, sendButtonStyle, textButton, textInputStyle, contentCompontent } = styles;
        return(
            <SafeAreaView style={[container, { backgroundColor: this.state.colorPrimary }]}>
                <HeaderComponent
                    title={'Phải hồi'}
                    nameIconLeft={'ios-arrow-back'}
                    onLeftPress={this.onBackPress}
                    underlineColorAndroid={'transparent'}
                />
                <KeyboardAvoidingView style={{ flex:1, }} behavior='padding' >
                    <View style={contentCompontent}>
                        <TextInput
                            style={textInputStyle}
                            placeholder={"Chúng tôi đánh giá cao các phản hồi của bạn."}
                            multiline={true}
                            value={this.state.text}
                            onChangeText={(text) => this.onChangeText(text)}
                        />
                    </View>
                    
                    <TouchableOpacity 
                        style={sendButtonStyle}
                        onPress={this.onSendPress}    
                    >
                        <Text style={textButton}>Gửi</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }

    componentDidMount() {
        this.getColor();
    }

    onBackPress() {
        this.props.navigation.goBack();
    }

    onChangeText(text) {
        this.setState({
            text
        })
    }

    onSendPress() {
        // alert(`${this.state.text}`)
        // Keyboard.dismiss();
        Alert.alert(
            'Thông báo',
            'Cảm ơn bạn đã phản hồi',
            [
              {text: 'OK', onPress: () => this.props.navigation.navigate(routeName.StackHomeScreen)},
            ]
          )
       
    }

    getColor() {
        asyncStorage.getColorTheme().then(color => {
            if(color !== null) {
                this.setState({ colorPrimary: color });
            }
        })
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        // justifyContent: 'space-between',
    },
    sendButtonStyle: {
        backgroundColor: "#771514",
        height: 70,
        justifyContent:'center',
    },
    textButton: {
        color: Colors.colorWhite,
        fontWeight: 'bold',
        textAlign:'center',
        fontSize: 20,
    },
    contentCompontent: {
        flex: 1,
        height: '100%',
        backgroundColor: Colors.colorWhite,
        borderRadius: 8,
        margin: 10,
    },
    textInputStyle: {
        margin: 10,
        padding: 4,
    }
})
export default FeedBackScreen;