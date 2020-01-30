import React, {useContext} from 'react';

import {
    StyleSheet,
    Text,
    FlatList,
    View
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';

import {VelibContext} from '../service/VelibProvider';

const DetailScreen = ({navigation}) =>{

    const context = useContext(VelibContext);

    const datas = navigation.getParam('data');
    const lat = datas.geo[0];
    const lgt = datas.geo[1];

    return (
        <>
               <Text> {datas.station_name}</Text>
                <MapView
                    style={styles.container}
                    region = { {
                        latitude:lat ,
                        longitude: lgt,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    showsUserLocation={true}
                    zoomEnabled={true}
                    followsUserLocation={true}
                >
                <Marker
                    coordinate = {{
                        latitude: lat,
                        longitude: lgt,
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
