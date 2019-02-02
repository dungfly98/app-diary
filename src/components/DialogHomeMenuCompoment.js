import React, { PureComponent } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { arrayHome } from '../config/DataFake';
import PopupDialog from 'react-native-popup-dialog';
import { View } from 'native-base';
import Colors from '../config/Colors';

class DialogHomeMenuCompoment extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            itemHome: ''
        }
    }

    render() {
        const { container, flatListStyle } = styles;
        return (
            <PopupDialog 
            width={300}
            height={130}
            dialogStyle={container}
            ref={(popupDialog) => { this.popupDialog = popupDialog }}>
                <FlatList
                    style={flatListStyle}
                    data={arrayHome}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </PopupDialog>
        );
    } 

    renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {this.props.onItemDialogPress(item.action, this.state.itemHome)}}
        >
            <Text style={styles.textStyle}>{item.name}</Text>
        </TouchableOpacity>
    ); 

    show(itemHome) {
        this.setState({ itemHome })
        this.popupDialog.show();
    }

    dismiss() { 
        this.popupDialog.dismiss()
    }
}

const styles = StyleSheet.create({ 
    container: { 
        borderRadius: 0,
        backgroundColor: Colors.colorGreyBackgroundHeader,
        justifyContent: 'center',  
    },
    textStyle: {
        marginTop: 20,
        marginLeft: 20, 
        color: Colors.colorWhite
    } 
})

export default DialogHomeMenuCompoment;