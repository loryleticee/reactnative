import React, {useContext, useState} from 'react';

import {
    StyleSheet,
    Text,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import {VelibContext} from "../service/VelibProvider";

const DetailScreen = ({navigation}) =>{
    //Station informations
    const resort = navigation.getParam('resort');
    const context = useContext(VelibContext);

    const [favResort, setFavResort] = useState([]);

    const addFav = (resortCode) => {
      const Resort = context.velibs.records.filter((item) => item.fields.station_code == resortCode);
      setFavResort(Resort);
    };

    if(favResort.length > 0) {

    }

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
          description = {resort.station_name}
          coordinate = {{
            latitude: resort.geo[0],
            longitude: resort.geo[1],
          }}>
        </Marker>
      </MapView>
      <Text onPress={() => addFav(resort.station_code)}> ⭐ </Text>
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
