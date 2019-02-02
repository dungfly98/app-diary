import React, { PureComponent } from 'react';
import { TextInput, StyleSheet, Text, TouchableOpacity, } from 'react-native';
import Modal from 'react-native-modalbox';
import Colors from '../config/Colors';
import { View } from 'native-base';

class DialogHomeSearchCompoment extends PureComponent {

    constructor(props) {
        super(props);
        this.onChangeText = this.onChangeText.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.state = {
            text: '',
        }
    }

    render() {
        const { 
            container, 
            textInputStyle, 
            viewButonDialog, 
            textCloseStyle, 
            textSearchStyle,
            viewInputStyle,
            textAllStyle
        } = styles;
        return (
            <Modal 
            position='center'
            style={container}
            ref={(popupDialog) => { this.popupDialog = popupDialog }}>
                <View style={viewInputStyle}>
                    <Text style={textAllStyle}>Tất cả</Text>
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={textInputStyle}
                        onChangeText={this.onChangeText}
                        value={this.state.text}
                    />
                </View>

                <View style={viewButonDialog}>
                    <Text 
                    onPress={()=>{ this.dismiss(); }}
                    style={textCloseStyle}>Đóng</Text>

                    <Text 
                    onPress={this.onSearch}
                    style={textSearchStyle}>Tìm kiếm</Text>
                </View>
            </Modal>
        );
    } 

    onChangeText(text) {
        this.setState({ text })
    }

    show(itemHome) {
        this.setState({ itemHome })
        this.popupDialog.open();
    }

    dismiss() { 
        this.popupDialog.close();
    } 

    onSearch() {
        if(this.state.text !== "") {
            this.props.onSearch(this.state.text);
        }
        this.dismiss();
    }
}

const styles = StyleSheet.create({ 
    container: {
        height: 100,
        width: 300,
        backgroundColor: Colors.colorGreyBackgroundHeader,
        justifyContent: 'center',  
    },
    textStyle: {
        marginTop: 20,
        marginLeft: 20,   
        color: Colors.colorWhite
    }, 
    textInputStyle: {
        flex: 1,
        color: Colors.colorGreyBackground,
        borderBottomWidth: 1,
        borderColor: Colors.colorGreyBackground,
    },
    viewButonDialog: {
        marginTop: 10,
        flexDirection: 'row', 
        justifyContent: 'flex-end',
    }, 
    textCloseStyle: {
        marginRight: 20,
        fontSize: 16,
        color: Colors.colorGreyBackground
    },
    textSearchStyle: {
        marginRight: 15, 
        fontSize: 16,
        color: Colors.colorGreyBackground
    },
    viewInputStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginRight: 15, 
    },  
    textAllStyle: {
        marginLeft: 15,
        marginRight: 20,   
        marginTop: 20,
        fontSize: 16,
        color: Colors.colorGreyBackground
    }
})

export default DialogHomeSearchCompoment;