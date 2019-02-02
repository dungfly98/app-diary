import React, { PureComponent } from 'react';
import { TouchableOpacity,Text, StyleSheet, View } from 'react-native';
import ItemCalendarComponent from './ItemCalendarComponent';
import Colors from '../config/Colors';
import asyncStorage from '../database/AsyncStorage';

class RowListHomeCompoment extends PureComponent {

    componentWillMount() {
        this.getTextColor();
        this.getTextSize();
    }

    render() {
        const { 
            container, 
            viewTitle, 
            textTitle, 
            textDescription,
        } = styles;
        const { item } = this.props;
        return (
            <TouchableOpacity 
            activeOpacity={0.9} 
            onLongPress={() =>{this.props.onLongItemPress(item)}}
            onPress={() => {this.props.onItemPress(item)}}
            style={container}>
                <ItemCalendarComponent 
                    name={this.props.nameFormat}
                    time={item.date} 
                />

                <View style={viewTitle}>
                    <Text style={[textTitle, { fontSize: this.props.size, color: this.props.textColor }]}>{item.title}</Text>
                    <Text style={[textDescription, { fontSize: this.props.size, color: this.props.textColor }]}>{`${item.content.slice(0, 25)}${item.content.length > 25 ? '...' : "" }`}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    getTextSize() {
        asyncStorage.getTextSize().then( size => {
            if(size !== null) {
                this.props.onChangeSize(parseInt(size) - 14);
            }
        })
    }

    getTextColor() {
         asyncStorage.getColorText().then(color => {
             if(color !== null) {
                 this.props.onChangeTextColor(color);
             }
        });
    }
}
 
const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',   
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 5,
        borderBottomWidth: 1,
        borderBottomColor: Colors.colorSlateGray,
        borderLeftWidth: 5,
        borderLeftColor: Colors.colorLawnGreen,
        backgroundColor: Colors.colorWhite,
    }, 
    viewTitle: {
        flex: 1,
        paddingLeft: 10,
    }, 
    textTitle: {
        fontSize: 16,
        color: Colors.coloBlack
    }, 
    textDescription: {
        fontSize: 14,
        color: Colors.coloBlack
    },
})

export default RowListHomeCompoment;