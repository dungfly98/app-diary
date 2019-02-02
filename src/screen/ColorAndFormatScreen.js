import React, { PureComponent } from 'react';
import { View, StyleSheet, SafeAreaView, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import Colors from '../config/Colors';
import { HueGradient } from 'react-native-color';
import Slider from "react-native-slider";
import ColorComponent from '../components/ColorComponent';
import { constant } from '../config/Constant';
import asyncStorage from '../database/AsyncStorage';
import ItemCalendarComponent from '../components/ItemCalendarComponent';


class ColorAndFormatScreen extends PureComponent {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.onBackPress = this.onBackPress.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.onColorThemePress = this.onColorThemePress.bind(this);
        this.onColorTextPress = this.onColorTextPress.bind(this);
        this.onChangeFontPress = this.onChangeFontPress.bind(this);
        this.onChangeColorText = this.onChangeColorText.bind(this);
        this.onFormatTimePress = this.onFormatTimePress.bind(this);
    }

    render() {
        const {
            container,
            iconStyle,
            viewThemes,
            textTitleThemes,
            imageButtonStyle,
            textInputStyle,
            sliderStyle,
            trackStyle,
            thumbStyle,
        } = styles;
        return (
            <SafeAreaView style={[container, { backgroundColor: this.props.backgroundColor }]}>
                <HeaderComponent
                    onLeftPress={this.onBackPress}
                    iconLeftStyle={iconStyle}
                    nameIconLeft={'ios-arrow-back'}
                    title={'Màu sắc và Định dạng'}
                />
                <View style={viewThemes}>
                    <Text style={textTitleThemes}>Giao diện</Text>
                    <View style={{ flexDirection: 'row', width: '100%', marginBottom: 30 }}>
                        <View style={{ flex: 1, height: 50 }}>
                            <HueGradient
                                gradientSteps={16}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={this.onColorThemePress}
                        >

                            <Image
                                resizeMode={'contain'}
                                style={imageButtonStyle}
                                source={require('../images/circle_color.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <Text style={[textInputStyle, { fontSize: this.props.size, color: this.props.textColor }]}>Hãy chọn màu và cỡ chữ để giúp nhật kí của bạn sinh động hơn</Text>

                        <View style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>

                            <TouchableOpacity
                                onPress={this.onColorTextPress}
                            >
                                <Image
                                    resizeMode={'contain'}
                                    style={imageButtonStyle}
                                    source={require('../images/circle_color.png')}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={this.onChangeFontPress}
                            >
                                <Text style={{ fontSize: 20, marginLeft: 15, color: Colors.colorWhite }}>Ff</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={{ height: 100, }}>
                        <Slider
                            thumbStyle={thumbStyle}
                            trackStyle={trackStyle}
                            style={sliderStyle}
                            minimumValue={0}
                            maximumValue={8}
                            step={1}
                            value={this.props.size - 14}
                            onValueChange={(value) => { this.onValueChange(value) }}
                        />
                    </View>

                    <Text style={{ marginTop: -50, color: Colors.colorWhite, fontWeight: 'bold', fontSize: 18 }}>Định dạng ngày</Text>

                    <FlatList
                        style={{ marginTop: 15, marginLeft: -10 }}
                        data={this.props.arrayFormatTime}
                        horizontal={true}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id.toString()}
                    />

                </View>

                <ColorComponent
                    backgroundColor={this.props.backgroundColor}
                    textColor={this.props.textColor}
                    onChangeColorTheme={this.onChangeColorTheme}
                    onChangeColorText={this.onChangeColorText}
                    ref={ColorComponent => this.ColorComponent = ColorComponent}
                />

            </SafeAreaView>
        );
    }

    renderItem = ({ item, index }) => (
        <TouchableOpacity
            onPress={this.onFormatTimePress(item, index)}
        >

            <ItemCalendarComponent
                style={styles.itemFlatListStyle}
                name={item.name}
                selecter={item.selected}
                titleStyle={{ backgroundColor: Colors.colorRed }}
                time={new Date()}
            />

        </TouchableOpacity>
    );

    onFormatTimePress = (item, index) => () => {
        this.props.onFormatTimePress(index);
    }

    onChangeColorTheme = (color) => {
        asyncStorage.removeColorTheme();
        asyncStorage.saveColorTheme(color);
        this.props.onChangeColorBackgroud(color);
    }

    onBackPress() {
        asyncStorage.removeTextSize();
        asyncStorage.saveTextSize(this.props.size.toString());
        this.props.navigation.goBack();
    }

    onValueChange(textSize) {
        this.props.onChangeSize(textSize);
    }

    onColorThemePress() {
        this.ColorComponent.show(constant.THEME);
    }

    onColorTextPress() {
        this.ColorComponent.show();
    }

    onChangeColorText(color) {
        asyncStorage.removeColorText();
        asyncStorage.saveColorText(color.toString());
        this.props.onChangeTextColor(color);
    }

    onChangeFontPress() {

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.colorPrimary,
    },
    iconStyle: {
        fontSize: 30,
    },
    viewThemes: {
        margin: 20,
    },
    textTitleThemes: {
        color: Colors.colorWhite,
        fontWeight: 'bold',
        marginBottom: 15,
        fontSize: 18
    },
    imageButtonStyle: {
        width: 50,
        height: 50,
        marginLeft: 20,
    },
    textInputStyle: {
        flex: 1,
        height: 120,
        borderRadius: 10,
        backgroundColor: Colors.colorWhite,
        padding: 15
    },
    sliderStyle: {
        height: 50,
        width: '80%'
    },
    trackStyle: {
        height: 15,
        borderRadius: 15,
    },
    thumbStyle: {
        height: 20,
        width: 20
    },
    itemFlatListStyle: {
        width: 65,
        marginLeft: 10,
        height: 65,
        marginRight: 15,
    }
});

export default ColorAndFormatScreen; 