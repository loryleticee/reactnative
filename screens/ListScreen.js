import React, { useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';

import getVelibs from "../service/velib"

export default function ListScreen() {
    const [velibs, setVelibs] = useState([]);
    useEffect(() => {
      getVelibs().then(data => {
        setVelibs(data.records);
      });
    }, [])

  console.log(velibs);

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
