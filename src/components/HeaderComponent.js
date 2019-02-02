import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from 'native-base';
import Colors from '../config/Colors';

class HeaderComponent extends PureComponent {
    render() {
        const { container, iconStyle, viewLeftStyle, texStyle, iconSearchStyle, iconRightHeaderStyle, rightHeader } = styles;
        return (
            <View style={container}>
                <View style={viewLeftStyle}>
                    <Icon
                        onPress={this.props.onLeftPress}
                        style={[iconStyle, this.props.iconLeftStyle]}
                        name={this.props.nameIconLeft}
                    />
                    <Text style={texStyle}>{this.props.title}</Text>
                </View>
                <Icon
                    onPress={this.props.onRightPress}
                    name={this.props.nameIconRight}
                    style={iconSearchStyle}
                />
                { this.props.showIcon ? this.showIconRight(iconRightHeaderStyle, rightHeader) : null }
            </View>
        );
    }
    showIconRight(iconRightHeaderStyle, rightHeader) {
        return (
            <TouchableOpacity onPress={this.props.onHelpPress} style={rightHeader}>
            <Icon
                name = 'md-help'
                style={iconRightHeaderStyle}
            />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        padding: 15,
        backgroundColor: Colors.colorLightGray,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    iconStyle: {
        color: Colors.colorWhite,
        fontSize: 30,
        width: '15%',
    },
    viewLeftStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    texStyle: {
        color: Colors.colorWhite,
        fontSize: 18, 
        marginLeft: 30,
        fontWeight: 'bold'
    },
    iconSearchStyle: {
        fontSize: 30,
        color: Colors.colorWhite
    },
    rightHeader: {
        borderRadius: 30,
        borderWidth: 2,
        width: 22,
        height: 22,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconRightHeaderStyle: {
        color: 'white',
        fontSize: 15,
    }
})

export default HeaderComponent;