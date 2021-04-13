import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Loader from "./components/shared/Loader";
import * as Location from 'expo-location';

export default function App() {

    const getLocation = async () => {
        const location = await Location.getCurrentPositionAsync();
        console.log(location);
    };

    useEffect(() => {
        getLocation();
    }, [])

    return (
        <View style={styles.wrap}>
            <Loader/>
        </View>
    );
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
