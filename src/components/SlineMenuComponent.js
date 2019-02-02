import React, { PureComponent } from 'react';
import { View, Image, StyleSheet, ScrollView, Text, Share, Linking } from 'react-native';
import Colors from '../config/Colors';
import ItemSlineMenu from "./ItemSlineMenu";
import { routeName } from '../config/Constant';
import asyncStorage from '../database/AsyncStorage';

class SlineMenuComponent extends PureComponent {

    constructor(props) {
        super(props);
        this.onShare = this.onShare.bind(this);
    }

    render() {
        const { 
            container, 
            headerStyle, 
            imageStyle, 
            textTitleStyle, 
            viewBodyStyle,
            viewFuntionStyle,
            viewVipStyle 
        } = styles;
        return (
            <ScrollView style={container}>
                <View style={[headerStyle, { backgroundColor: this.props.backgroundColor, }]}>
                    <Image
                        tintColor={Colors.colorWhite}
                        resizeMode={'contain'}
                        style={imageStyle}
                        source={require('../images/imgAvatar.png')}
                    />  
                    <Text style={textTitleStyle}>Đăng nhập</Text>
                </View>

                <View style={viewBodyStyle}>
                    <View style={viewFuntionStyle}>
                        <ItemSlineMenu
                            onPress={()=>{ this.props.navigation.navigate(routeName.StackLockScreen) }}
                            iconName={'md-lock'}
                            text={'Mã khóa'} 
                        />

                        <ItemSlineMenu
                            onPress={()=>{ this.props.navigation.navigate(routeName.StackColorAndFormatContainer) }}
                            iconName={'md-color-palette'} 
                            text={'Màu sắc và Định dạng'} 
                        />

                        <ItemSlineMenu
                            onPress={()=>{ this.props.navigation.navigate(routeName.StackNotificationScreen) }}
                            iconName={'ios-notifications'}
                            text={'Lời nhắc'} 
                        />

                        <ItemSlineMenu
                            onPress={()=>{this.props.navigation.navigate(routeName.StackExportScreen)}}
                            iconName={'md-document'}
                            text={'Xuất'}  
                        />

                        <ItemSlineMenu
                            onPress={()=>{ this.props.navigation.navigate(routeName.StackRatingsReviewsScreen) }}
                            iconName={'ios-star'}
                            text={'Xếp hạng và đánh giá'} 
                        />

                        <ItemSlineMenu
                            onPress={this.onShare}
                            iconName={'md-share'}
                            text={'Giới thiệu cho bạn bè'}  
                        />
                    </View>

                    <View style={viewVipStyle}>
                        <ItemSlineMenu
                            iconName={'md-medal'}
                            text={'Mua gói trả phí'}  
                        />
                    </View>

                    <ItemSlineMenu
                        onPress={() => { Linking.openURL("https://www.facebook.com/WriteDiaryApp/");}}
                        iconName={'logo-facebook'}
                        text={'Truy cập Facebook'}  
                    />

                    <ItemSlineMenu
                        onPress={() => {this.props.navigation.navigate(routeName.StackFeedBackScreen)}}
                        iconName={'ios-repeat'}
                        text={'Phản hồi'}  
                    />

                    <ItemSlineMenu
                        iconName={'md-help-circle'}
                        text={'Trợ giúp'}  
                    />

                    <ItemSlineMenu
                        onPress={() => {this.props.navigation.navigate(routeName.StackDiaryScreen)}}
                        iconName={'md-information-circle'}
                        text={'Giới thiệu'}  
                    /> 
                </View>                
            </ScrollView>
        );
    }
    onShare() {
        Share.share({
            message: 'Chào bạn, tôi đang dùng ứng dụng nhật ký và rất vui được giới thiệu ứng dụng này với bạn! Hãy tải về ở đây: https://www.writediary.com/getapp ',
        });
        this.props.navigation.navigate('DrawerClose')
    }
}

const styles = StyleSheet.create({  
    container: {
        flex: 1,
    },  
    headerStyle: {
        backgroundColor: Colors.colorPrimary,
        flexDirection: 'row', 
        height: 150,
        alignItems: 'center',
    },
    imageStyle: {
        borderRadius: 30,
        width: 65,
        height: 65,
        marginLeft: 20
    },
    textTitleStyle: {
        color: Colors.colorWhite, 
        marginLeft: 20,
    },
    viewBodyStyle: {
        flex: 1,
        backgroundColor: Colors.colorGreyBackgroundHeader,
    },
    viewFuntionStyle: {
        paddingBottom: 20,
        borderBottomWidth: 0.6,
        borderBottomColor: Colors.colorGrey,
    },
    viewVipStyle: {
        paddingBottom: 20,
        borderBottomWidth: 0.6,
        borderBottomColor: Colors.colorGrey
    }
})

export default SlineMenuComponent;