import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import Colors from '../config/Colors';

class  HeaderNoteCompoment extends PureComponent {
    render() {
        const { container, viewRight, iconStyle, textStyle, imageStyle } = styles;
        return (
            <View style={container}>
                <View style={viewRight}>
                    <TouchableOpacity
                        onPress={this.props.onBackPress}
                    >
                        <Icon 
                            name={'ios-arrow-back'}
                            style={iconStyle}
                        />
                    </TouchableOpacity>
                    
                    <Text style={textStyle}>Viết nhật ký</Text>
                </View>

                <TouchableOpacity
                    onPress={this.props.onEmojiPress}
                >
                    <Image 
                        resizeMode={'contain'}
                        source={require('../images/smile.png')}
                        style={imageStyle}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.props.onCheckPress}
                >
                    <Icon
                        name={'md-checkmark'}
                        style={iconStyle}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.props.onMenuPress}
                >
                    <Image 
                        resizeMode={'contain'}
                        source={require('../images/menu.png')}
                        style={imageStyle}
                    />
                </TouchableOpacity>  

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.colorGreyBackgroundHeader,
        padding: 15,
        flexDirection: 'row',
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    viewRight: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconStyle: {
        fontSize: 30,
        color: Colors.colorWhite
    },
    textStyle: {
        fontSize: 18,
        color: Colors.colorWhite,
        marginLeft: 20,
    },
    imageStyle: {
        width: 25,
        height: 25
    }
})

export default HeaderNoteCompoment;