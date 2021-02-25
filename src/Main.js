import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';

import styles from './components/styles/MainStyle.js';

export default function Main() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);


    useEffect(() => {
        (async () => {
              let { status } = await Location.requestPermissionsAsync();
              if (status !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                    return;
              }

              let location = await Location.getCurrentPositionAsync({});
              setLocation(location);
        })();
    }, []);

    let textMessage = "gimme a min...";
    if (errorMsg) {
        textMessage = errorMsg;
    } else if (location) {
        textMessage = JSON.stringify(location);
    }
    return (
        <View style={styles.container}>
            <Text>IN DEVELOPMENT!!</Text>
            <Text>Where ya at?</Text>
            <Text>{textMessage}</Text>
            <Text>LOCATION:</Text>
            <Text>Latitude: [{location.coords.latitude}]</Text>
            <Text>Longitude: [{location.coords.longitude}]</Text>
            <StatusBar style="auto" />
        </View>
    );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
