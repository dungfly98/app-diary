import React, { PureComponent } from 'react';
import { TouchableOpacity, StyleSheet, Text} from 'react-native';
import { Icon } from 'native-base';
import Colors from "../config/Colors";

class ItemSlineMenu extends PureComponent {
    render() {
        const { container, iconStyle, textStyle } = styles;
        return (
            <TouchableOpacity 
            onPress={this.props.onPress}
            style={container}>
                <Icon
                    style={iconStyle}
                    name={this.props.iconName}
                />
                <Text style={textStyle}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center', 
        marginTop: 20,
    },
    iconStyle: {
        color:  Colors.colorYellow
    },
    textStyle: {
        fontSize: 16,
        color: Colors.colorWhite,
        marginLeft: 30
    }
})

export default ItemSlineMenu;