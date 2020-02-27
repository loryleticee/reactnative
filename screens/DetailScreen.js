import React, {useContext, useState, createContext, useEffect} from 'react';

import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import {VelibContext} from "../service/VelibProvider";

export const BuildContext = (favR) => {
  return createContext(favR)
};

const DetailScreen = ({navigation}) =>{
    //Station informations
    const resort = navigation.getParam('resort');
    const context = useContext(VelibContext);

    const [favResort, setFavResort] = useState([]);

  /**
   * get the resort wich user choosen
   * rerender
   * @TODO DEPLACE IN A SERVICE BECAUSE WE WANT INIT A NEW RESORT ARRAY WITH VELIBS STATE INFORMATIONS
   * @param resortCode
   */
  const addFav = (resortCode) => {
      const Resort = context.velibs.records.filter((item) => item.fields.station_code == resortCode);
      setFavResort(Resort);
    };

  /**
   * @param  favR
   */

  useEffect(() =>{
    if(favResort.length > 0) {
      BuildContext(favResort);
    }
  }, []);

  return (
    <View style={styles.container}>
    <Text> {resort.station_name}</Text>
    <MapView
      style={styles.map}
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
        title={resort.station_name}
        image={require('../assets/bike.png')}
        description= {resort.nbbike.toString() +' / '+resort.nbbikeoverflow}
        coordinate= {{
          latitude: resort.geo[0],
          longitude: resort.geo[1],
        }}>
      </Marker>
    </MapView>
      <TouchableHighlight onPress={() => addFav(resort.station_code)}>
        <Image source={require('../assets/star.png')} />
      </TouchableHighlight>
    </View>
  );
};

DetailScreen.navigationOptions = {
  title: "Vélibs",
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#fff',
  },map: {
    flex: 2,
  },
});

export default DetailScreen;
