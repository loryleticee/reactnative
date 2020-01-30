import React, { useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  AsyncStorage
} from 'react-native';

import getVelibs from "../service/velib"

export default function ListScreen() {
  const [velibs, setVelibs] = useState([]);

  _storeData = async (data) => {
    try {
      await AsyncStorage.setItem("velibs",JSON.stringify(data));
    } catch (error) {
      // Error saving data
    }
  };

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('velib');
      if (value !== null) {
        // We have data!!
        console.log('RetrieveData', value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  useEffect(() => {
    getVelibs().then(data => {
      setVelibs(data.records);
      _storeData(data.records);

    });
  }, [])

    return (
    <FlatList
      style={styles.container}
      renderItem={({ item }) => {

        return <Text>{item.fields.station_name}</Text>
      }}
      data={velibs}
      keyExtractor={item => item.recordid}
    />
  );
}

ListScreen.navigationOptions = {
  title: "Vélibs",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
