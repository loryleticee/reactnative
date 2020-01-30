import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Marker, MapView} from "react-native-maps";

export default function MapScreen() {

  const markers = {};

  return (
    <View style={styles.container}>
        <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
        >
          {/*markers.map(marker => (
              <Marker
                  coordinate={marker.latlng}
                  title={marker.title}
                  description={marker.description}
              />
          ))*/}
        </MapView>
    </View>
  );
}

MapScreen.navigationOptions = {
  title: 'Map',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
