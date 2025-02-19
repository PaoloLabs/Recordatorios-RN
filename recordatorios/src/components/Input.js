import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    view: {
        height: 70,
        margin: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 4,
        padding: 15
    }
})
export default ({placeholder, onChangeText, value}) => (
    <View style={styles.view}>
        <TextInput 
            style={styles.input} 
            placeholder={placeholder} 
            onChangeText={onChangeText}
            value={value}/>
    </View>
);
