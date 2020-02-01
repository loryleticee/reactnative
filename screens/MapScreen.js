import React, {useContext, useEffect, useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import  MapView, {Marker} from "react-native-maps";
import {VelibContext} from "../service/VelibProvider";

export default function MapScreen() {

  const velibContext = useContext(VelibContext);
  const localPos = velibContext.userLocation;

  const [local, setLocal] = useState({
      "latitude": 48.86,
      "longitude": 2.333333,
    }
  ) ;

  useEffect(() =>{
    setLocal(localPos)
  },[localPos]);

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: local.latitude,
          longitude: local.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.container}
        showsUserLocation={true}
      >
        {velibContext.velibs.records.map((velib, index) => {
          return (
            <Marker
              style={{
                flex :1,
                flexDirection : 'column',
                alignSelf: 'center'
              }}
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
