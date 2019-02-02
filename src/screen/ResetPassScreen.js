import React, { PureComponent } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import asyncStorage from '../database/AsyncStorage';
import Colors from '../config/Colors';
class ResetPassScreen extends PureComponent {
    static navigationOptions = {
        header: null,
    }
    constructor(props){
        super(props)
        this.state = {
            colorPrimary: Colors.colorPrimary
        }
    }
    
    render() {
        const { container, headerComponent, iconHeaderStyle, iconHelpHeaderStyle } = styles;
        return (
            <SafeAreaView style={[container, {backgroundColor: this.state.colorPrimary}]}>
                <View style={headerComponent}>
                    <TouchableOpacity 
                        style={iconHeaderStyle}
                        onPress = {()=>{this.onHelpPress()}}
                    >
                        <Icon
                            name = 'md-help'
                            style={iconHelpHeaderStyle}
                        />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
    componentDidMount() {
        this.getColor();
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
    },
    headerComponent: {

    },
    iconHeaderStyle: {

    },
    iconHelpHeaderStyle: {

    },
})
export default ResetPassScreen;