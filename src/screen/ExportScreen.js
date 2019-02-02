import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Icon } from 'native-base';
import Colors from "../config/Colors";
import asyncStorage from "../database/AsyncStorage";
import HeaderComponent from '../components/HeaderComponent';
class ExportScreen extends PureComponent {
    
    static navigationOptions = {
        header: null,
    }

    constructor(props){
        super(props)
        this.onBackPress = this.onBackPress.bind(this);
        this.onHelpPress = this.onHelpPress.bind(this);
        this.state = {
            colorPrimary: Colors.colorPrimary
        }
    }
    render() {
        const { 
            container, 
            contentComponent,
            clickButton,
            textButtonStyle,
            iconContentStyle,
            textContentStyle,
            iconRightContentStyle,
            iconLeftContentStyle,
            iconContent,
            titleTextContent,
            descriptionTextContent
        } = styles;
        return (
            <SafeAreaView style={[container, { backgroundColor: this.state.colorPrimary }]}>
                <HeaderComponent
                    title={'Xuất'}
                    nameIconLeft={'ios-arrow-back'}
                    onLeftPress={this.onBackPress}
                    showIcon={true}
                    onHelpPress={this.onHelpPress}
                />
                <View style={[contentComponent, { backgroundColor: this.state.colorPrimary }]}>
                    <View style={iconContentStyle}>
                        <View style={iconContent}>
                            <Icon
                                name={'ios-document'}
                                style={iconRightContentStyle}
                            />
                            <Icon
                                name={'md-arrow-forward'}
                                style={[iconLeftContentStyle, 
                                { color: this.state.colorPrimary, borderColor: this.state.colorPrimary }]}
                            />
                        </View>
                    </View>
                    <View style={textContentStyle}>
                        <Text style={titleTextContent}>Xuất toàn bộ ghi chép</Text>
                        <Text style={descriptionTextContent}>
                            Tạo thêm một bản sao lưu của toàn bộ 2 ghi chép, {"\n"}
                            và lưu trữ trên một ứng dụng khác hoặc bộ nhớ {"\n"} khác.
                        </Text>
                    </View>
                </View>
                <TouchableOpacity 
                    onPress={this.onExportPress}
                    activeOpacity={0.7} 
                    style={clickButton}
                >
                    <Text style={textButtonStyle}>XUẤT NGAY</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
    componentDidMount() {
        this.getColor();
    }
    onBackPress() {
        this.props.navigation.goBack(); 
    };
    onHelpPress() {
        alert('click on Help')
    };
    onExportPress() {
        alert('click on Export')
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
    contentComponent: {
        flex: 1,
    },
    clickButton: {
        backgroundColor: '#007940',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButtonStyle: {
        color: Colors.colorWhite,
        fontWeight: 'bold',
        fontSize: 18,
    },
    iconContent: {
        width: 62,
    },
    iconContentStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconRightContentStyle: {
        color: Colors.colorWhite,
        fontSize: 100,
    },
    iconLeftContentStyle: {
        borderRadius: 30,
        borderWidth: 3,
        width: 32,
        height: 32,
        textAlign: 'center',
        backgroundColor: Colors.colorWhite,
        fontWeight:'bold',
        position: 'absolute',
        right: 0,
        bottom:0,
    },
    textContentStyle: {
        flex: 1,
        alignItems: 'center',
    },
    titleTextContent: {
        color: Colors.colorWhite,
        fontSize: 22,
        fontWeight: 'bold'
    },
    descriptionTextContent:{
        textAlign: 'center',
        color: Colors.colorWhite,
        marginTop: 60,
    }
})
export default ExportScreen;