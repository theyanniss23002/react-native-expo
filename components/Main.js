import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import weatherOptions from "../helpers/weatherOptions";

function Main({ data, condition }) {
    const notFound = 'Данные не получены';
    return (
        <>
            <View style={styles.container}>
                <MaterialCommunityIcons name={weatherOptions[condition[0].main].iconName} size={80} color='#fff'/>
                <Text style={styles.text}>{data?.main?.temp + '°' || notFound}</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>{data.name || notFound}</Text>
                {condition?.map((item) =>(
                    <Text style={styles.text} key={item.id}>{item.main}</Text>
                ))}
            </View>
        </>
    );
}

export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        paddingTop: 15,
        color: '#fff'
    }
});

Main.propTypes = {
    data: {
        name: PropTypes.string.isRequired,
        main: {
            temp: PropTypes.number,
        }
    }
}

