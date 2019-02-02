import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../config/Colors'; 
import { Icon } from 'native-base';

class SingleHeaderComponent extends PureComponent {
    render() {
        const { viewHeaderStyle, iconHeaderStyle, textHeaderStyle } = styles;
        const { iconName, title } = this.props;
        return (
            <View style={viewHeaderStyle}>
                <Icon
                    onPress={this.props.onPress}
                    name={iconName}
                    style={iconHeaderStyle}
                />
                <Text style={textHeaderStyle}>{title}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewHeaderStyle: {
        backgroundColor: Colors.colorGreyBackgroundHeader,
        flexDirection: 'row',
        height: 70,
        alignItems: "center",
    },
    iconHeaderStyle: {
        color: Colors.colorWhite,
        fontSize: 25,
        marginLeft: 20,
    },
    textHeaderStyle: {
        color: Colors.colorWhite,
        marginLeft: 30,
        fontWeight: 'bold',
        fontSize: 20, 
    },
})

export default SingleHeaderComponent;