import React, { PureComponent } from 'react';
import { SafeAreaView, StyleSheet, Keyboard } from 'react-native';
import NoteDateComponent from '../components/NoteDateComponent';
import TextInputTitleComponent from '../components/TextInputTitleComponent';
import TextInputMultilineCompoment from '../components/TextInputMultilineCompoment';
import HeaderNoteCompoment from '../components/HeaderNoteCompoment';
import Colors from '../config/Colors';
import { insertNote, updateNote } from '../database/Database';
import CalendarComponent from '../components/CalendarComponent'
import EmojiSelectorCompoment from '../components/EmojiSelectorCompoment';
import PopupDialog from 'react-native-popup-dialog';
import asyncStorage from '../database/AsyncStorage';

const item = null;
const edit = false;
class NoteScreen extends PureComponent {

    static navigationOptions =  {
        header: null,
        drawerLockMode: 'locked-closed'
    };

    constructor(props) {
        super(props);
        this.onChangeTitleText = this.onChangeTitleText.bind(this);
        this.onChangeContentText = this.onChangeContentText.bind(this);
        this.onBackPress = this.onBackPress.bind(this);
        this.onEmojiPress = this.onEmojiPress.bind(this);
        this.onCheckPress = this.onCheckPress.bind(this);
        this.onMenuPress = this.onMenuPress.bind(this);
        this.keyboardDidShow = this.keyboardDidShow.bind(this);
        this.onDateSelected = this.onDateSelected.bind(this);
        this.onCalendarPress = this.onCalendarPress.bind(this);
        this.onEmojiSelected = this.onEmojiSelected.bind(this);  

        const { params } = this.props.navigation.state;
        item = params ? params.item : null;
        edit = params ? params.edit : false;

        this.state = {
            title: edit ? item.title : '',
            content: edit ? item.content : '',
            toggleEmoji: false ,
            date: edit ? item.date : new Date(),
            colorPrimary: Colors.colorPrimary,
            colorText: Colors.coloBlack,
            sizeText: 14 
        }
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
    }

    render() {
        const { container } = styles;
        return (
          <SafeAreaView style={[container, { backgroundColor: this.state.colorPrimary }]}>
            <HeaderNoteCompoment
                onBackPress={this.onBackPress}
                onEmojiPress={this.onEmojiPress}
                onCheckPress={this.onCheckPress}
                onMenuPress={this.onMenuPress}
            /> 

            <NoteDateComponent
                textSize={this.state.sizeText}
                colorText={this.state.colorText}
                onPress={this.onCalendarPress}
                date={this.state.date}
            />

            <TextInputTitleComponent
            textSize={this.state.sizeText}
            colorText={this.state.colorText}
            value={this.state.title}
            placeholder={"Thêm tiêu đề"}
            onChangeText={this.onChangeTitleText}
            />

            <TextInputMultilineCompoment
            textSize={this.state.sizeText}
            colorText={this.state.colorText}
            value={this.state.content}
            placeholder={"Bắt đầu nhập nội dung ở đây"}
            onChangeText={this.onChangeContentText}
            />
            {this.state.toggleEmoji && this.showEmoji()}
            {this.showCalendar()}

          </SafeAreaView>
        );
    }

    componentDidUpdate() {
        if(this.state.toggleEmoji)
        Keyboard.dismiss();
    }

    componentDidMount() {
        this.getColor();
        this.getColorText();
        this.getTextSize();
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    }

    onChangeTitleText(title) {  
        this.setState({ title })
    }

    onChangeContentText(content) {
        this.setState({ content })
    }

    onEmojiSelected(emoji) {
        this.setState({ content: this.state.content + emoji });
    }

    onBackPress() {
        this.props.navigation.goBack();
    }

    onEmojiPress() {
        this.setState({
            toggleEmoji: !this.state.toggleEmoji
        })
    }

    onCalendarPress() {
        this.popupDialog.show();
    }

    getColor() {
        asyncStorage.getColorTheme().then(color => {
            if(color !== null) {
                this.setState({ colorPrimary: color });
            }
        })
    }

    getColorText() {
        asyncStorage.getColorText().then(color => {
            if(color !== null) {
                this.setState({ colorText: color });
            }
        })
    }

    getTextSize() {
        asyncStorage.getTextSize().then(size => {
            if(size !== null) {
                this.setState({ sizeText: parseInt(size) });
            }
        })
    }

    onCheckPress() {
        if (edit) {
            const Note = {
                id: item.id,
                title: this.state.title,
                content: this.state.content,
                date: this.state.date
            };
            updateNote(Note).then().catch((error) => { alert(error) });
            this.props.navigation.goBack();
        } else {
            const newNote = {
                id: Math.floor(Date.now() / 1000),
                title: this.state.title,
                content: this.state.content,
                date: this.state.date
            };

            insertNote(newNote).then().catch((error) => { alert(error) });
            this.props.navigation.goBack();
        }
    }

    onMenuPress() {

    }

    showEmoji() {
        return(
            <EmojiSelectorCompoment
                onEmojiSelected={this.onEmojiSelected}
            />
        )
    }

    showCalendar() {
        return(
            <PopupDialog
                width={300}  
                ref={(popupDialog) => { this.popupDialog = popupDialog; }}
            >
                <CalendarComponent
                    colorPrimary={this.state.colorPrimary}
                    date={this.state.date}
                    onChange={this.onDateSelected}
                />
            </PopupDialog>
        )
    }

    keyboardDidShow () {
        if(this.state.toggleEmoji) {
            this.setState({
                toggleEmoji: false
            })
        }
    }

    onDateSelected(date) {
        this.popupDialog.dismiss(); 
        this.setState({ date: new Date(date) })
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.colorPrimary,
    }
})

export default NoteScreen;  