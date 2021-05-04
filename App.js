import  React, { useEffect, useState  } from 'react';
import { Alert, StatusBar, StyleSheet } from 'react-native';
import Loader from './components/shared/Loader';
import * as Location from 'expo-location';
import axios from 'axios';
import Main from "./components/Main";
import { LinearGradient } from "expo-linear-gradient";
import weatherOptions from "./helpers/weatherOptions";

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const API_KEY = '1578c703060a77c8fa8644f257fd5db5';

function App() {
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState({});
    const [condition, setCondition] = useState([]);

    const getWeather = (latitude, longitude) => {
        setLoading(true);
        axios.get(`${API_URL}lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
            .then((res) => {
                setWeather(res.data);
                setCondition(res.data.weather);
            });
        setLoading(false);
    };


    const getLocation = async () => {
        try {
            setLoading(true);
            await Location.requestPermissionsAsync();
            const { coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
            getWeather(latitude, longitude);
            setLoading(false);
        } catch (error) {
            Alert.alert('Местоположение не определено');
        }
    };

    useEffect(() => {
        getLocation();
    }, [])

    return (
        <>
            <StatusBar barStyle='light-content'/>
            {!loading && weather && condition
                ? (<LinearGradient
                    style={styles.wrap}
                    colors={weatherOptions[condition[0].main].gradient}
                >
                    <Main data={weather} condition={condition}/>
                </LinearGradient>)
                : <Loader/>
            }
        </>
    );
}

export default App;

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
    },
});
