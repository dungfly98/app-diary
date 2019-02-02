import React, { PureComponent } from 'react';
import { View, SafeAreaView, StyleSheet, Text, Alert } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import Colors from '../config/Colors';
import { Icon } from 'native-base';
import Slider from "react-native-slider";
import PushNotification from 'react-native-push-notification';
import configTextNotification from '../config/configTextNotification';
import asyncStorage from '../database/AsyncStorage';

class NotificationScreen extends PureComponent {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.onBackPress = this.onBackPress.bind(this);
        this.onCheckPress = this.onCheckPress.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.state = {
            time:  0,
            colorPrimary: Colors.colorPrimary 
        }
    };

    render() {
        const { 
            container, 
            Iconstyle, 
            viewContentStyle, 
            textNofiticationStyle, 
            textDesStyle,
            textDesTopStyle,
            textTimeStyle,
            sliderStyle,
            trackStyle,
            thumbStyle 
        } = styles;
        return (
            <SafeAreaView style={[container, { backgroundColor: this.state.colorPrimary, }]}>
                <HeaderComponent
                    iconLeftStyle={{ fontSize: 30, }}
                    nameIconLeft={'ios-arrow-back'}
                    nameIconRight={'md-checkmark'}
                    onLeftPress={this.onBackPress}
                    onRightPress={this.onCheckPress}
                    title={'Thiết lập lời nhắc'}
                />
                <View style={viewContentStyle}>
                    <Icon
                        name={'ios-notifications'}
                        style={Iconstyle}
                    />
                    <Text style={textNofiticationStyle}>Thiết lập lời nhắc</Text>
                    <Text style={textDesTopStyle}>Chúng ta thường biết rằng đôi khi rất dễ quên. Hãy tự</Text>
                    <Text style={textDesStyle}>giúp mình nhớ việc cập nhật nhật kí</Text>
                    <Text style={textTimeStyle}>{configTextNotification(this.state.time)}</Text>
                    <Slider
                        thumbStyle={thumbStyle}
                        trackStyle={trackStyle}
                        style={sliderStyle}
                        minimumValue={0}
                        maximumValue={10} 
                        step={1}
                        onValueChange={this.onValueChange}
                        value={parseInt(this.state.time)}
                    />
                </View>
            </SafeAreaView>
        );
    };

    componentDidMount() {   
        this.getTime();
        this.getColor();
        PushNotification.configure({
            permissions: {
                alert: true,
                badge: true,
                sound: true
            },
        })
    };

    onBackPress() {
        this.props.navigation.goBack();
    };

    onCheckPress() {
        const { time } = this.state;
        if (time === 0) {
            asyncStorage.removeTimeNotification();
            PushNotification.cancelAllLocalNotifications();
            Alert.alert('Thiết lập lời nhắc', 'Lời nhắc đã tắt')
        } else {
            const SECONDSOFDAYS =  24 * 60 * 60 * 1000
            PushNotification.cancelAllLocalNotifications();
            PushNotification.localNotificationSchedule({
                message: "Hãy ghi lại nhật kí của bạn với  Diary ", 
                date: new Date(Date.now() + (time * SECONDSOFDAYS)),
                repeatType:'day',
                repeatInterval:'day',
              });
            asyncStorage.saveTimeNotification(time.toString());
            Alert.alert('Thiết lập lời nhắc', 'Đã bật lời nhắc')
        }
        
    };

    getTime() {
        asyncStorage.getTimeNotification().then(time => {
            if(time !== null) {
                this.setState({ time });
            }
        })
    };

    getColor() {
        asyncStorage.getColorTheme().then(color => {
            if(color !== null) {
                this.setState({ colorPrimary: color });
            }
        })
    };

    onValueChange(time) {
        this.setState({ time });
    };

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.colorPrimary,   
    },
    Iconstyle: {
        marginTop: 80,
        fontSize: 120,
        color: Colors.colorWhite
    },
    viewContentStyle: {
        flex: 1,
        alignItems: 'center',

    },
    textNofiticationStyle: {
        color: Colors.colorWhite,
        fontSize: 18,
        fontWeight: 'bold',
    },
    textDesStyle: {
        color: Colors.colorWhite
    },
    textDesTopStyle: {
        color: Colors.colorWhite,
        marginTop: 80
    },
    textTimeStyle: {
        marginTop: 70,
        color: Colors.colorWhite
    },
    sliderStyle: {
        width: '95%',
        height: 20
    },
    trackStyle: {
        height: 10,
        borderRadius: 10,
    },
    thumbStyle: {
        height: 20,
        width: 20
    }
})  

export default NotificationScreen;