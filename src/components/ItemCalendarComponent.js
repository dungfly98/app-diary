import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../config/Colors';
import { formatTime } from '../config/formatTime';

class ItemCalendarComponent extends PureComponent {
    render() {
        const { 
            container, 
            viewTitle, 
            textTitle, 
            viewDesciption, 
            textDescriptionTop, 
            textDescriptionBottom 
        } = styles;
        const { time, name, selecter, style, titleStyle } = this.props;
        const timeFormat = formatTime(name, time);
        const selected = selecter ? selecter : false;
        const selectedStyle = selected && {  borderTopWidth: 7, borderTopColor: Colors.colorGrey, };
        return (
            <View style={[container, style, selectedStyle]}>
                <View style={[viewTitle, titleStyle]}>
                    <Text style={textTitle}>{timeFormat.textUp}</Text>
                </View>
                <View style={viewDesciption}>
                    <Text style={textDescriptionTop}>{timeFormat.textCenter}</Text> 
                    <Text style={textDescriptionBottom}>{timeFormat.textDown}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        backgroundColor: Colors.colorGreyBackground,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewTitle: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.colorLawnGreen,
    }, 
    textTitle: {
        color: Colors.colorWhite,
        fontSize: 14
    }, 
    viewDesciption: {
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    textDescriptionTop: {
        fontWeight: 'bold',
        color: Colors.coloBlack,
        fontSize: 20,
    }, 
    textDescriptionBottom: {
        marginBottom: 5,
        fontSize: 10
    } 

})

export default ItemCalendarComponent;