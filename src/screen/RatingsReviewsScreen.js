import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import RatingsComponent from '../components/RatingsComponent';
import HeaderComponent from '../components/HeaderComponent';
import asyncStorage from '../database/AsyncStorage';
import Colors from '../config/Colors';
class RatingsReviewsScreen extends PureComponent {

    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props)
        this.onBackPress = this.onBackPress.bind(this)
        this.state = {
            colorPrimary: Colors.colorPrimary
        }
    }
    render() {
        const { 
            container,
            contentComponent,
            titleContentStyle,
            ratingsContentStyle,
            titleRatings,
            textRatings,
            textThanks
        } = styles;
        return (
            <SafeAreaView style={container}>
                <HeaderComponent
                    title={'Xếp hạng và đánh giá'}
                    nameIconLeft={'ios-arrow-back'}
                    onLeftPress={this.onBackPress}
                />
                <View style={[contentComponent, { backgroundColor: this.state.colorPrimary }]}>
                    <Text style={titleContentStyle}>
                        Bạn đang cảm thấy thế nào về {'\n'} WriteDiary?
                    </Text>
                    <View style={ratingsContentStyle}>
                        <RatingsComponent
                        />
                        <Text style={titleRatings}>Hãy chọn từ 1 đến 5 sao ở trên</Text>
                        <Text style={textRatings}>
                            Nếu bạn thích ứng dụng này, chúng tôi rất mong {'\n'} được
                            bạn đánhh giá 5 sao trên cửa hàng ứng {'\n'} dụng CH Play - 
                            việc này sẽ guips đỡ chúng tôi rất {'\n'} nhiều.
                        </Text>
                        <Text style={textThanks}>
                            Cảm ơn bạn đã ủng hộ chúng tôi!
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
        );
    }

    componentDidMount() {
        this.getColor();
    }


    getColor() {
        asyncStorage.getColorTheme().then(color => {
            if(color !== null) {
                this.setState({ colorPrimary: color })
            }
        })
    }

    onBackPress(){
        this.props.navigation.goBack();
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentComponent: {
        flex: 1,
        backgroundColor: '#eb0065'
    },
    titleContentStyle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        marginTop: 40,
    },
    ratingsContentStyle: {
        alignItems: 'center',
        marginTop: 40,
    },
    titleRatings: {
        color: 'white',
        marginTop: 5,
        fontSize: 12,
    },
    textRatings: {
        color:'white',
        textAlign: 'center',
        marginTop: 50,
    },
    textThanks: {
        color: 'white',
        textAlign:'center',
        marginTop: 50,
    }
})
export default RatingsReviewsScreen;