import React, { PureComponent } from 'react';
import { SafeAreaView, StyleSheet, Image } from 'react-native';
import ListHomeComponent from '../components/ListHomeComponent';
import Colors from '../config/Colors';
import HeaderComponent from '../components/HeaderComponent';
import FloatButtonContainer from '../redux/containers/FloatButtonContainer';
import { routeName, constant } from '../config/Constant';
import { deleteNote } from "../database/Database";
import DialogHomeMenuCompoment from '../components/DialogHomeMenuCompoment';
import DialogHomeSearchCompoment from '../components/DialogHomeSearchCompoment';
import { View } from 'native-base';
import asyncStorage from '../database/AsyncStorage';

class HomeScreen extends PureComponent {

    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.onAddPress = this.onAddPress.bind(this);
        this.onSlineMenuPress = this.onSlineMenuPress.bind(this);
        this.onSearchPress = this.onSearchPress.bind(this);
        this.onItemPress = this.onItemPress.bind(this);
        this.onLongItemPress = this.onLongItemPress.bind(this);
        this.onItemDialogPress = this.onItemDialogPress.bind(this);
        this.search = this.search.bind(this);
        this.state = {
            colorPrimary: Colors.colorPrimary
        }
    }

    render() {
        const colorPrimary = this.props.backgroundColor === null ? this.state.colorPrimary : this.props.backgroundColor;
        const { container, imageBookStyle, imagePenStyle } = styles;
        return (
            <SafeAreaView style={[container, { backgroundColor: colorPrimary, }]}>
                <HeaderComponent
                    onLeftPress={this.onSlineMenuPress}
                    onRightPress={this.onSearchPress}
                    nameIconLeft={'ios-reorder'}
                    nameIconRight={'ios-search'}
                    title={'WriteDiary'}
                />
                <Image
                    style={imageBookStyle}
                    resizeMode={'contain'}
                    source={require('../images/backgroundBook.png')}
                />
                <Image
                    style={imagePenStyle}
                    resizeMode={'contain'}
                    source={require('../images/backgroundPen.png')}
                />
                <View style={{ flex: 1 }}>
                    <ListHomeComponent
                        ref={(ListHomeComponent) => { this.ListHomeComponent = ListHomeComponent }}
                        onLongItemPress={this.onLongItemPress}
                        onItemPress={this.onItemPress}
                    />
                </View>
                <FloatButtonContainer
                    onPress={this.onAddPress}
                />

                <DialogHomeMenuCompoment
                    onItemDialogPress={this.onItemDialogPress}
                    ref={(popupDialog) => { this.popupDialog = popupDialog }}
                />

                <DialogHomeSearchCompoment
                    onSearch={this.search}
                    ref={(DialogHomeSearch) => { this.DialogHomeSearch = DialogHomeSearch }}
                />
            </SafeAreaView>
        );
    }

    componentDidMount() {
        this.getColor();
    }

    onAddPress() {
        this.props.navigation.navigate(routeName.StackNoteScreen);
    }

    onSlineMenuPress() {
        this.props.navigation.navigate('DrawerOpen');
    }

    getColor() {
        asyncStorage.getColorTheme().then(color => {
            if (color !== null) {
                this.props.onChangeColorBackgroud(color)
            }
        })
    }

    onSearchPress() {
        this.DialogHomeSearch.show();
    }

    onItemDialogPress(key, itemHome) {
        switch (key) {
            case constant.DELETE:
                deleteNote(itemHome.id).then().catch((error) => { alert(error) });
                break;

            case constant.SEE: {
                const prarams = {
                    item: itemHome,
                    edit: true
                }
                this.props.navigation.navigate(routeName.StackNoteScreen, prarams);
            }
                break;

            case constant.SHARE:

                break
        }
        this.popupDialog.dismiss();
    }

    search(text) {
        this.ListHomeComponent.search(text);
        this.popupDialog.dismiss();
    }

    onLongItemPress(item) {
        this.popupDialog.show(item);
    }

    onItemPress(item) {
        const prarams = {
            item,
            edit: true
        }
        this.props.navigation.navigate(routeName.StackNoteScreen, prarams);
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.colorPrimary,
    },
    imageBookStyle: {
        position: 'absolute',
        bottom: -75,
        right: -50,
        width: 200,
        height: 200,
    },
    imagePenStyle: {
        position: 'absolute',
        bottom: 0,
        right: 120,
        width: 100,
        height: 100,
        transform: [
            { rotate: '-150deg' },
        ],
    }
})

export default HomeScreen;  