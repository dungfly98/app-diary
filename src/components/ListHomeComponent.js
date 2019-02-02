import React, { PureComponent } from 'react';
import { View,  FlatList, StyleSheet, Text } from 'react-native';
import RowListHomeContainer from '../redux/containers/RowListHomeContainer';
import { queryAllNote } from '../database/Database';
import realm from '../database/Database';
import Colors from '../config/Colors';
import asyncStorage from '../database/AsyncStorage';
class ListHomeComponent extends PureComponent {

    constructor(props) {
        super(props);
        this.onCloseResultSearchPress = this.onCloseResultSearchPress.bind(this);
        this.state = {
            listNote: [],
            text: '',
            toggleResultSearch: false
        }
    }

    componentWillMount() {
        this.reloadData();
        realm.addListener('change', () => {
            this.reloadData();
        });
    }

    render() {
        const { container } = styles
        return (
            <View style={container}>
                {this.state.toggleResultSearch && this.showResultSearch()}

                <FlatList
                    data={this.state.listNote}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        );
    }

    componentDidUpdate() {
        const length =  this.state.listNote.length
        asyncStorage.saveListNote(length.toString()).then(listNote => {
            if(listNote !== null){
                // alert(this.state.listNote.length)
            }
        })
    }

    renderItem = ({item}) => (
        <RowListHomeContainer
            onLongItemPress={this.props.onLongItemPress}
            onItemPress={this.props.onItemPress}
            item={item}
        />
    )

    reloadData() {
        queryAllNote().then((listNote) => {
            this.setState({
                listNote,
                toggleResultSearch: false,
                text: '' 
            });
        }).catch(() => {
            this.setState({ 
                listNote: [],
                toggleResultSearch: false,
                text: '' 
            });
        }); 
    }

    showResultSearch() {
        return (
            <View style={styles.viewReaultSearchStyle}>
                <View style={styles.viewLeftStyle}>
                    <Text style={styles.textfilterStyle}>Tìm kiếm: {this.state.text}</Text>
                    <Text style={styles.textResultStyle}>Kết quả: {this.state.listNote.length}</Text>
                </View>

                <Text  
                onPress={this.onCloseResultSearchPress}
                style={styles.textLeftStyle}>x</Text>
            </View>
        );
    }

    search(text) {
        const arrayResult = this.state.listNote.filter(item =>{return item.title.includes(text) || item.content.includes(text) });
        this.setState({ 
            listNote: arrayResult, 
            text,
            toggleResultSearch: true
        })
    }

    onCloseResultSearchPress() {
        this.reloadData();
    }
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    viewReaultSearchStyle: {
        borderRadius: 5,
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.colorGreyBackgroundHeader,
        padding: 15, 
    },
    viewLeftStyle: {

    },
    textLeftStyle: {
        fontSize: 25,
        color: Colors.colorWhite
    },
    textfilterStyle: {  
        fontSize: 12,
        color: Colors.colorWhite
    },
    textResultStyle: {
        fontSize: 16 ,
        color: Colors.colorWhite
    }
}); 

export default ListHomeComponent;