import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Styles from './Styles'

const CardView = props => {
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss }}>
            <View style={{ ...Styles.card, ...props.style }}>{props.children}</View>
        </TouchableWithoutFeedback>
    );
};
export default CardView