import React, {useContext, useState, useEffect} from 'react';

import {
    StyleSheet,
    Text,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';

import {VelibContext} from '../service/VelibProvider';

const DetailScreen = ({navigation}) =>{

    const resort = navigation.getParam('resort');

    const velibContext = useContext(VelibContext);
    const localPos = velibContext.userPlace;

    const [resortCoord, setResortCoord] =  useState([]);

    const initResortCoord = (props) => {
      return  { latitude :props.geo[0], longitude:props.geo[1]};
    };

    useEffect(() =>{
      setResortCoord(initResortCoord(resort))
    },[]) ;

    console.log('KIII', resortCoord)

    return (
        <>
           <Text> {resort.station_name}</Text>
            <MapView
                style={styles.container}
                region = {{
                    latitude: localPos.latitude ,
                    longitude: localPos.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation={true}
                zoomEnabled={true}
                followsUserLocation={true}
            >
                <Marker
                    coordinate = {{
                        latitude: resortCoord.latitude,
                        longitude: resortCoord.longitude,
                    }}>
                </Marker>
            </MapView>
        </>
    );
};

DetailScreen.navigationOptions = {
    title: "Vélibs",
};

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: '#fff',
    },
});

export default DetailScreen;
