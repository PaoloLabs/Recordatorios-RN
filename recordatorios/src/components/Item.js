import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderBottomColor: "#ddd",
        borderBottomWidth: 1
    },
    item: {
        fontSize: 18,
        height: 50,
        padding: 15 
    }
}); 

export default ({ item }) => (
    <View style={ styles.container }>
        <Text style={ styles.item }> {item.title}</Text>
    </View>
);

