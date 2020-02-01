import React, {useContext, useState} from 'react';

import {
    StyleSheet,
    Text,
    Image,
    View
  ,
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
          description= {resort.nbbike.toString() +' / '+resort.maxbikeoverflow.toString()}
          coordinate= {{
            latitude: resort.geo[0],
            longitude: resort.geo[1],
          }}>
        </Marker>
      </MapView>
        <Image onPress={() => addFav(resort.station_code)} source={require('../assets/star.png')} />
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
