import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';
import { routeName } from '../config/Constant';
import asyncStorage from '../database/AsyncStorage';
class SplashScreen extends PureComponent {
    static navigationOptions = {
        header: null,
    }
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={{flex: 1, justifyContent:'center', alignItems:'center' }}> 
                <Image 
                    source={require('../images/splash.jpg')}
                />
            </View>
        );
    }

    componentDidMount() {
        setTimeout(() => {
            // this.props.navigation.replace(routeName.StackHomeScreen)
            asyncStorage.getPassLock().then(pass => {
                if(pass === null) {
                    this.props.navigation.replace(routeName.StackHomeScreen)
                } else {
                    this.props.navigation.replace(routeName.StackLockDiaryScreen)
                }
            })
        }, 2000);
    }
}

export default SplashScreen;