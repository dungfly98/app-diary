import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import asyncStorage from '../database/AsyncStorage';
import Colors from '../config/Colors';
class DiaryScreen extends PureComponent {

    static navigationOptions = {
        header: null,
    }

    constructor(props){
        super(props)
        this.onBackPress = this.onBackPress.bind(this)
        this.state = {
            colorPrimary: Colors.colorPrimary,
            nummber: ''
        }
    }
    render() {
        const {
            container,
            contentComponent,
            textUpContentStyle,
            titleTextUp,
            textDownContentStyle,
            contentTextUp,
            versionTextDown,
            numberreadTextDown,
            idTextDown,
            titleTextDown
        } = styles;
        return (
            <SafeAreaView style={container}>
                <HeaderComponent
                    title={'Giới thiệu'}
                    onLeftPress={this.onBackPress}
                    nameIconLeft={'ios-arrow-back'}
                />
                <View style={[contentComponent, { backgroundColor: this.state.colorPrimary }]}>
                    <View style={textUpContentStyle}>
                        <Text style={titleTextUp}>Nhật ký</Text>
                        <Text style={contentTextUp}>
                            Một kho tàng lưu lại những ghi chép trong cuộc đời của {`\n`} bạn.
                        </Text>
                    </View>
                    <View style={textDownContentStyle}>
                        <Text style={versionTextDown}>v4.89</Text>
                        <Text style={numberreadTextDown}>Số ghi chép: {this.state.nummber}</Text>
                        <Text style={idTextDown}>ID: c5e6ef058cc7251e2e45ce4ad4b6d2b</Text>
                        <Text style={titleTextDown}>WriteDiary.com</Text>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
    componentDidMount() {
        this.getColor();
        this.getListNote();
    }
    onBackPress(){
        this.props.navigation.goBack();
    }

    getListNote() {
        asyncStorage.getListNote().then(text => {
            if(text !== null){
                this.setState({ 
                    nummber : text
                });
            }
        })
    }

    getColor() {
        asyncStorage.getColorTheme().then(color => {
            if(color !== null) {
                this.setState({ colorPrimary: color })
            }
        })
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentComponent: {
        flex: 1,
    },
    textUpContentStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleTextUp: {
        color: "white",
        fontSize: 70,
        fontWeight: "bold",
        fontFamily: 'VINCHAND',
    },
    contentTextUp: {
        color: 'white',
        marginTop: 20,
        fontSize: 14,
        textAlign:'center'
    },
    textDownContentStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 40,
    },
    versionTextDown: {
        color:'white',
        fontWeight: 'bold',
        fontSize: 14,
    },
    numberreadTextDown: {
        color: 'white',
        fontSize: 14,
    },
    idTextDown: {
        color: 'white',
        fontSize: 10,
    },
    titleTextDown: {
        color: 'white'
    }
})
export default DiaryScreen;