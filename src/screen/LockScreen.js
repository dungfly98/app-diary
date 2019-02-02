import React, { PureComponent } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Alert  } from 'react-native';
import { Icon } from 'native-base';
import PassInputCompoment from '../components/PassInputCompoment';
import Colors from '../config/Colors';
import asyncStorage from '../database/AsyncStorage';
import SingleHeaderComponent from '../components/SingleHeaderComponent';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { routeName } from '../config/Constant';

class LockScreen extends PureComponent {

    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.onChangePassText = this.onChangePassText.bind(this);
        this.onChangeEmailText = this.onChangeEmailText.bind(this);
        this.onChangeEmailAgainText = this.onChangeEmailAgainText.bind(this);
        this.onBackPress = this.onBackPress.bind(this);
        this.buttonPress = this.buttonPress.bind(this);
        this.state = {
            pass: '',
            email: '',
            emailAgain: '',
            colorPrimary: Colors.colorPrimary
        }
    }

    render() {
        const { 
            container, 
            viewContentStyle, 
            iconContentStyle, 
            textContentStyle, 
            viewButtonStyle, 
            textButtonStyle
        } = styles;
        return (
            <SafeAreaView style={[container, { backgroundColor: this.state.colorPrimary, }]}>
                <SingleHeaderComponent
                    onPress={this.onBackPress}
                    iconName={'ios-arrow-back'}
                    title={'Thiết lập mã khóa'}
                />
                <KeyboardAwareScrollView>
                    <View style={viewContentStyle}>
                        <Icon
                            name={'md-lock'}
                            style={iconContentStyle}
                        />
                        <Text style={textContentStyle}>Dùng mã khóa để bảo mật nhật ký của bạn.</Text>
                    <PassInputCompoment
                        onChangePassText={this.onChangePassText}
                        onChangeEmailText={this.onChangeEmailText}
                        onChangeEmailAgainText={this.onChangeEmailAgainText}
                    />
                    </View>
                </KeyboardAwareScrollView>
                <TouchableOpacity 
                    onPress={this.buttonPress}
                    style={viewButtonStyle}>
                    <Text style={textButtonStyle}>LƯU</Text>
                </TouchableOpacity>
            </SafeAreaView> 
        );
    }

    componentDidMount() {
        this.getColor();
    }

    onBackPress() {
        this.props.navigation.goBack();
    }

    onChangePassText(text) {
        this.setState({
            pass: text
        })    
    }
    onChangeEmailText(text) {
        this.setState({
            email: text
        })
    }
    onChangeEmailAgainText(text) {
        this.setState({
            emailAgain: text
        })
    }

    getColor() {
        asyncStorage.getColorTheme().then(color => {
            if(color !== null) {
                this.setState({ colorPrimary: color });
            }
        })
    }
    
    buttonPress() {
        // alert(`${this.state.pass} - ${this.state.email} - ${this.state.emailAgain}`)
        if(this.state.pass !== "") {
            asyncStorage.savePassLock(this.state.pass)
            Alert.alert(
                'Thông báo',
                'Đã lưu mật khẩu',
                [
                {text: 'OK', onPress: () => this.props.navigation.navigate(routeName.StackHomeScreen)},
                ]
            )
        } else {alert('Bạn chưa nhập mật khẩu')}
    }
}
const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.colorPrimary,   
    },
    viewContentStyle: {
        alignItems: 'center',
    },
    iconContentStyle: {
        color: Colors.colorWhite,
        fontSize: 100,
        marginTop: 30, 
    },
    textContentStyle: {
        color: Colors.colorWhite,
        marginTop: 15,
    },
    viewButtonStyle: { 
        height: 65,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#007940',
    },
    textButtonStyle: {
        color: Colors.colorWhite,
        fontWeight: 'bold',
        fontSize: 15
    } 
})
export default LockScreen;