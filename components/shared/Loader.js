import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function Loader() {
    return (
        <View style={styles.wrap}>
            <Text style={styles.title}>Загрузка...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        color: '#000'
    }
})
