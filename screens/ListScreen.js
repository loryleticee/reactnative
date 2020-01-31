import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  AsyncStorage
} from 'react-native';

import {VelibContext} from '../service/VelibProvider';

const ListScreen = (props) =>{
    const context = useContext(VelibContext);

  return (
    <FlatList
      style={styles.container}
      data={context.velibs.records}
      keyExtractor={item => item.recordid}
      renderItem={({ item }) => {
          return <Text onPress={() => {
              props.navigation.navigate('Details', {
                  resort: item.fields,
              });
          }}>{item.fields.station_name}</Text>
      }}
    />
  );
};

ListScreen.navigationOptions = {
  title: "Vélibs",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ListScreen;