import React from 'react';
import { TouchableHighlight, Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    button: {
        backgroundColor: "blue",
        padding: 20,
        borderRadius: 4
    },
    text: {
        color: "#fff",
        fontSize: 16
    },
});
export default ({ title, onPress }) => (
    <TouchableHighlight style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
);
