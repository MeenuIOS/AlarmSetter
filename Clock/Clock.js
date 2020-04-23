import React from 'react';
import { View, ImageBackground, Text, Button, TextInput, ScrollView, Alert } from 'react-native';
import CardView from './CardView';
import Styles from './Styles';
import AlarmView from './AlarmView'
import moment from 'moment';
export default class Clock extends React.Component {

    constructor() {
        super();
        this.state = { currentHour: null, currentMin: null, currentSec: null, currentDay: null, TextInputValueHolder: null, totalDuration: 0 }
        this.textTimeInputAndAlrmMsg = { textCurrentHour: null, textCurrentMin: null, textCurrentSec: null, alarmText: null }
        this.daysArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    }

    getDerivedStateFromProps() {
        this.getCurrentTime();
    }

    getCurrentTime = () => {
        let hour = new Date().getHours();
        let minutes = new Date().getMinutes();
        let seconds = new Date().getSeconds();
        let am_pm = 'pm';

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        if (hour > 24) {
            hour = 24 - hour;
        }
        if (hour < 10) {
            hour = '0' + hour;
        }

        if (new Date().getHours() < 12) {
            am_pm = 'am';
        }

        this.setState({ currentHour: hour });
        this.setState({ currentMin: minutes });
        this.setState({ currentSec: seconds })

        this.daysArray.map((item, key) => {
            if (key == new Date().getDay()) {
                this.setState({ currentDay: item.toUpperCase() });
            }
        })
    }

    setAlarmTigger = () => {
        if (this.state.textCurrentHour > 24) {
            Alert.alert("Hour is not correct ", 'pls insert in between 1 to 24', 'ok')
        }
        else if (this.state.textCurrentMin > 60 || this.state.textCurrentSec > 60) {
            Alert.alert("Value is not correct ", 'pls insert in between 0 to 59', 'ok')
        }
        else {
            var inputTime = this.state.textCurrentHour + ":" + this.state.textCurrentMin + ":" + this.state.textCurrentSec;
             var date = moment()
                .utcOffset('+05:30')
                .format('YYYY-MM-DD hh:mm:ss');

            var todayDate = moment()
                .utcOffset('+05:30')
                .format('YYYY-MM-DD');

            var expirydate = todayDate + ' ' + inputTime;
            var diffr = moment.duration(moment(expirydate).diff(moment(date)));
            var hours = parseInt(diffr.asHours());
            var minutes = parseInt(diffr.minutes());
            var seconds = parseInt(diffr.seconds());
            //converting in seconds
            var d = hours * 60 * 60 + minutes * 60 + seconds;
            this.setState({ totalDuration: d });
            Alert.alert("Please wait you alarm will trigger in ",String(d) + " - Seconds", 'OK');
            this.tick();
        }

    }

    tick() {
        // start timer after button is clicked
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                totalDuration: prevState.totalDuration - 1
            }));
            if (this.state.totalDuration === 0) {
               new AlarmView(this.state.currentDay, this.state.alarmText);
            }
        }, 1000);
    }


    componentWillUnmount() {
        clearInterval(this.timer);
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.getCurrentTime();
        }, 1000);
    }

    render() {
        return (
            <ScrollView>
                <View style={Styles.container}>
                    <ImageBackground
                        source={{
                            uri:
                                'https://i.pinimg.com/originals/62/6f/84/626f84c40696c1308a77fd8331e12b3e.jpg',
                        }}
                        style={Styles.imageViewContainer}>
                        <CardView>
                            <View>
                                <View style={Styles.titleContainer}>
                                    <Text style={Styles.textContent}> Set Your Alarm </Text>
                                </View>
                                <Button fontSize="25" title={'Timing-' + String(this.state.currentHour) + " : " + String(this.state.currentMin) + " : " + String(this.state.currentSec)} color='yellow' enable={false} />

                                <View style={Styles.textValue}>
                                    <Text style={Styles.textTitle}> Enter hour,min,sec </Text>
                                    <View style={Styles.textInputContainer}>
                                        <TextInput style={Styles.inputView} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType='numeric' maxLength={2} placeholder='HH' backgroundColor='red' enablesReturnKeyAutomatically={true} onChangeText={TextInputValueHolder => this.setState({ textCurrentHour: TextInputValueHolder.replace(/[^0-9]/g, '') })} />
                                        <TextInput style={Styles.inputView} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType='numeric' maxLength={2} placeholder='MM' backgroundColor='yellow' enablesReturnKeyAutomatically={true} onChangeText={TextInputValueHolder => this.setState({ textCurrentMin: TextInputValueHolder.replace(/[^0-9]/g, '') })} />
                                        <TextInput style={Styles.inputView} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType='numeric' maxLength={2} placeholder='SS' backgroundColor='white' enablesReturnKeyAutomatically={true} onChangeText={TextInputValueHolder => this.setState({ textCurrentSec: TextInputValueHolder.replace(/[^0-9]/g, '') })} />
                                    </View>
                                </View>

                                <View style={Styles.textValue}>
                                    <Text style={Styles.textTitle}> Enter you Text for Alarm </Text>
                                    <TextInput style={Styles.inputAlarmView} blurOnSubmit autoCorrect={false} placeholder='Your message please' backgroundColor='yellow' enablesReturnKeyAutomatically={true} onChangeText={TextInputValueHolder => this.setState({ alarmText: TextInputValueHolder })} />
                                </View>

                                <View style={Styles.setAlarmButton}>
                                    <Button style={Styles.setAlarmButton} title={'Set Alarm'} color='#f7287b' fontSize="25" onPress={() => this.setAlarmTigger()} />
                                </View>
                            </View>
                        </CardView>

                    </ImageBackground>
                </View>
            </ScrollView>
        );
    }
};


