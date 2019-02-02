import React, { PureComponent } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Calendar from 'react-native-calendar-datepicker';
import Moment from 'moment';
import Colors from '../config/Colors';
import syncStorage from '../database/AsyncStorage';

const { width } = Dimensions.get('window');
class  CalendarComponent extends PureComponent {
    render() {
        const { 
            container, 
            barView, 
            barText, 
            stageView, 
            dayHeaderView, 
            dayHeaderText,
            dayRowView,
            dayText,
            dayDisabledText,
            dayTodayText,
            daySelectedText,
            monthText,
            monthDisabledText,
            monthSelectedText
        } = styles;
        return (
            <Calendar
            slideThreshold={width}
            onChange={(date) => this.props.onChange(date)}
            selected={this.props.date}
            minDate={Moment().startOf('year')} 
            maxDate={Moment().add(10, 'years')} 
            // General Styling}
            style={container}
            barView={[barView, { backgroundColor: this.props.colorPrimary, }]}
            barText={barText}
            stageView={stageView}
            // Day selector styling
            dayHeaderView={dayHeaderView}
            dayHeaderText={dayHeaderText}
            dayRowView={dayRowView}
            dayText={dayText}
            dayDisabledText={dayDisabledText}
            dayTodayText={[dayTodayText, { color: this.props.colorPrimary}]}
            daySelectedText={[daySelectedText, { backgroundColor: this.props.colorPrimary}]}
            // Styling month selector.
            monthText={monthText}
            monthDisabledText={monthDisabledText}
            monthSelectedText={monthSelectedText}
            // Styling year selector.
            yearMinTintColor={Colors.BLUE_CALENDAR}
            yearMaxTintColor={Colors.GREY_CALENDAR}
            yearText={{ color: Colors.BLACK_CALENDAR, }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.colorWhite,
        borderWidth: 1,
        borderColor: Colors.GREY_CALENDAR,
        borderRadius: 5,
        alignSelf: 'center',
    },
    barView: {
        backgroundColor: Colors.colorPrimary,
        padding: 10,
    },
    barText: {
        fontWeight: 'bold',
        color: Colors.colorWhite,
    },
    stageView: {
        padding: 0,
    },
    dayHeaderView: {
        backgroundColor: Colors.LIGHT_GREY_CALENDAR,
        borderBottomColor: Colors.GREY_CALENDAR,
    },
    dayHeaderText: {
        fontWeight: 'bold',
        color: Colors.BLACK_CALENDAR,
    },
    dayRowView: {
        borderColor: Colors.LIGHT_GREY_CALENDAR,
        height: 40,
    },
    dayText: {
        color: Colors.BLACK_CALENDAR,
    },
    dayDisabledText: {
        color: Colors.GREY_CALENDAR,
    },
    dayTodayText: {
        fontWeight: 'bold',
        color: Colors.colorPrimary,
    },
    daySelectedText: {
        fontWeight: 'bold',
        backgroundColor: Colors.colorPrimary,
        color: Colors.colorWhite,
        borderRadius: 15,
        borderColor: "transparent",
        overflow: 'scroll',
    },
    monthText: {
        color: Colors.BLACK_CALENDAR,
        borderColor: Colors.BLACK_CALENDAR,
    },
    monthDisabledText: {
        color: Colors.GREY_CALENDAR,
        borderColor: Colors.GREY_CALENDAR,
    },
    monthSelectedText: {
        fontWeight: 'bold',
        backgroundColor: Colors.BLUE_CALENDAR,
        color: Colors.colorWhite,
        overflow: 'scroll',
    }
    
})

export default CalendarComponent ;