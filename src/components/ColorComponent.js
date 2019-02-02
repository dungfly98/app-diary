import React, { PureComponent } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Modal from 'react-native-modalbox';
import { TriangleColorPicker } from 'react-native-color-picker';
import Colors from '../config/Colors';
import tinycolor from "tinycolor2";
import { constant } from '../config/Constant';

class ColorComponent extends PureComponent {

    constructor(props) {
        super(props);
        this.onColorChange = this.onColorChange.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onAgreePress = this.onAgreePress.bind(this);
        this.state = {
            backgroundColor: this.props.backgroundColor,
            textColor: '',
            key: '',
        }
    }

    render() {
        const { container, viewButtonStyle, textStyle } = styles;
        const oldColor = this.state.key === constant.THEME ? this.props.backgroundColor : this.props.textColor
        return (
            <Modal 
            position='center'
            style={container}
            ref={(popupDialog) => { this.popupDialog = popupDialog }}>
                <TriangleColorPicker
                    hideSliders={true}
                    oldColor={oldColor}
                    onColorChange={this.onColorChange}
                    style={{ flex: 1, }}
                />

                <View style={viewButtonStyle}>
                    <Text 
                    onPress={this.onCancel}
                    style={textStyle}>HỦY</Text>
                    <Text 
                    onPress={this.onAgreePress}
                    style={textStyle}>ĐỒNG Ý</Text>
                </View>
            </Modal>
        );
    }
 
    show(theme) {
        this.popupDialog.open();
        this.setState({ key: theme });
    }

    dismiss() { 
        this.popupDialog.close();
    } 

    onColorChange(color) {
        this.setState({
            backgroundColor: tinycolor(color).toHexString()
        })
    }  

    onCancel() {
        this.dismiss();
    }

    onAgreePress() {
        if(this.state.key === constant.THEME) {
            this.props.onChangeColorTheme(this.state.backgroundColor);
            this.popupDialog.close();
        }else {
            this.props.onChangeColorText(this.state.backgroundColor);
            this.popupDialog.close();
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.colorGrey,
        borderRadius: 5,
        flex: 1
    },
    viewButtonStyle: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    textStyle: {
        margin: 15,
        color: Colors.colorWhite
    }
})

export default ColorComponent;