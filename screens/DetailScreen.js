import React, {useContext, useState, useEffect} from 'react';

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

    const [localCoord, setLocalCoord] =  useState([]);

    const initCoord = (props) => {
      return  [props.geo[0], props.geo[1]];
    };

    console.log('GGHH', context.velibs.records);

    useEffect(() =>{
        setLocalCoord(initCoord(datas))
    },[]) ;

    return (
        <>
           <Text> {datas.station_name}</Text>
            <MapView
                style={styles.container}
                region = {{
                    latitude: localCoord[0] ? localCoord[0] : 0 ,
                    longitude: localCoord[1] ? localCoord[1] : 0,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation={true}
                zoomEnabled={true}
                followsUserLocation={true}
            >
                <Marker
                    coordinate = {{
                        latitude: localCoord[0],
                        longitude: localCoord[1],
                    }}>
                </Marker>
                {context.velibs.records.map((velib) => {
                    return (
                        <Marker
                            coordinate = {{
                                latitude: velib.fields.geo[0],
                                longitude: velib.fields.geo[1],
                            }}>
                        </Marker>
                    )
                })}
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
