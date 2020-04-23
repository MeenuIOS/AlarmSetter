
import React from 'react';
import { Alert } from 'react-native';

function AlarmView(currentDay, alarmMsg) {
   
    Alert.alert(alarmMsg,currentDay, 'OK');

    return React.createElement('div', {},
        React.createElement('Time', {}, 'timeFormat'),
        React.createElement('Day', {}, currentDay),
        React.createElement('AlertMsg', {}, alarmMsg));
}

export default AlarmView;