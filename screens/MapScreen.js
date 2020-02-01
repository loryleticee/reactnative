import React, {useContext} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import  MapView, {Marker} from "react-native-maps";
import {VelibContext} from "../service/VelibProvider";

export default function MapScreen() {

  const velibContext = useContext(VelibContext);
  const localPos = velibContext.userLocation;

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: localPos.latitude,
          longitude: localPos.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.container}
        showsUserLocation={true}
      >
        {velibContext.velibs.records.map((velib, index) => {
          console.log(velib.fields);
          return (
            <Marker
              title={velib.fields.station_name}
              image={require('../assets/bike.png')}
              description= {velib.fields.nbbike.toString() +' / '+velib.fields.maxbikeoverflow.toString()}
              key={index}
              coordinate = {{
                latitude: velib.fields.geo[0],
                longitude: velib.fields.geo[1],
              }}>
            </Marker>
          )
        })}
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
