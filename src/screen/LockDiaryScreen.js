import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, SafeAreaView } from 'react-native'
import { Icon } from 'native-base';
import asyncStorage from '../database/AsyncStorage';
import Colors from '../config/Colors';
import { routeName } from '../config/Constant';
class LockDiaryScreen extends PureComponent {
    static navigationOptions = {
        header: null,
    }

    constructor(props){
        super(props);
        this.onHelpPress = this.onHelpPress.bind(this);
        this.textinput = this.textinput.bind(this);
        this.onLockPress = this.onLockPress.bind(this);
        this.onForgotPress = this.onForgotPress.bind(this);
        this.state = {
            text: '',
            colorPrimary: Colors.colorPrimary
        }
    }
    render() {
        const { 
            container,
            headerComponent,
            iconHeaderStyle,
            iconHelpHeaderStyle,
            contentComponent,
            textContentStyle,
            titleTextUp,
            contentTextUp,
            textinputContentStyle,
            iconInputContent,
            textinputstyle,
            buttonComponent,
            lockButtonStyle,
            forgotpasswordButtonStyle,
            textButton,
            buttonContenStyle
        } = styles;
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
                <View style={contentComponent}>
                    <View style={textContentStyle}>
                        <Text style={titleTextUp}>Nhật ký</Text>
                        <Text style={contentTextUp}>
                            Một kho tàng lưu lại những ghi chép trong cuộc đời của {`\n`} bạn.
                        </Text>
                    </View>

                    <View style={buttonContenStyle}>
                        <View style={textinputContentStyle}>
                            <Image
                                source={require('../images/icontextinput.jpg')}
                                style={iconInputContent}
                            />
                            <TextInput
                                underlineColorAndroid={'transparent'}
                                placeholder="Nhập mã"
                                onChangeText={this.textinput}
                                style={textinputstyle}
                                secureTextEntry={true}
                            />
                        </View>

                        <View style={buttonComponent}>
                            <TouchableOpacity
                                style={lockButtonStyle}
                                onPress = {()=>{this.onLockPress()}}
                            >
                                <Text style={textButton}>MỞ KHÓA</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={forgotpasswordButtonStyle}
                                onPress = {()=>{this.onForgotPress()}}
                            >
                                <Text style={textButton}>BẠN ĐÃ QUÊN MÃ?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    </View>
            </SafeAreaView>
        );
    }
    componentDidMount() {
        this.getColor();
    };
    onHelpPress() {
        alert('Không ai giúp đâu')
    };
    textinput(text) {
        this.setState({
            text
        })
    };
    onLockPress() {
        // alert(this.state.text)
        asyncStorage.getPassLock().then(pass => {
            if(pass === this.state.text) {
                this.props.navigation.replace(routeName.StackHomeScreen)
            } else {
                alert('Bạn đã nhập sai mật khẩu')
            }
        })
    };
    onForgotPress() {
        this.props.navigation.navigate(routeName.StackResetPassScreen)
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
    flexDirection: "column"
  },
  headerComponent: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  iconHeaderStyle: {
    marginRight: 10,
    borderRadius: 30,
    borderWidth: 2,
    width: 22,
    height: 22,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  iconHelpHeaderStyle: {
    color: "white",
    fontSize: 15,
    justifyContent: "flex-end"
  },
  contentComponent: {
    flex: 1,
    alignItems: "center",
  },
  textContentStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
    marginTop: 50
  },
  titleTextUp: {
    color: "white",
    fontSize: 70,
    fontFamily: 'VINCHAND'
  },
  contentTextUp: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
  textinputContentStyle: {
    flexDirection: "row",
    backgroundColor: "white",
    width: 300,
    borderRadius: 5,
    height: 55,
  },
  iconInputContent: {
    width: 25,
    height: 25,
    marginLeft: 10,
    marginTop: 15
  },
  textinputstyle: {
    width: 230,
    margin: 10,
    height: 40,
  },
  buttonComponent: {
    width: "100%",
    justifyContent: 'flex-end',
    flex: 1
  },
  lockButtonStyle: {
    backgroundColor: "#007940",
    marginBottom: 1,
    width: "100%",
    height: 60,
    justifyContent: "center"
  },
  forgotpasswordButtonStyle: {
    backgroundColor: "#007940",
    height: 40,
    justifyContent: "center"
  },
  textButton: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonContenStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
  }
});
export default LockDiaryScreen;