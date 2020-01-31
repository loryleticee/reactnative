import React from 'react';

import {
    StyleSheet,
    Text,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';

const DetailScreen = ({navigation}) =>{
    //Station informations
    const resort = navigation.getParam('resort');

    return (
      <>
      <Text> {resort.station_name}</Text>
      <MapView
        style={styles.container}
        region = {{
            latitude: resort.geo[0]  ,
            longitude: resort.geo[1],
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        zoomEnabled={true}
        followsUserLocation={true}
      >
      <Marker
          coordinate = {{
              latitude: resort.geo[0],
              longitude: resort.geo[1],
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
