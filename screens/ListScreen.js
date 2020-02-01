import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';

import {VelibContext} from '../service/VelibProvider';
import {FavContext} from '../screens/DetailScreen';

const ListScreen = (props) =>{
  const context = useContext(VelibContext);
  const favContext = useContext(FavContext);
  return (
    <FlatList
      style={styles.container}
      data={context.velibs.records}
      keyExtractor={item => item.recordid}
      renderItem={({ item }) => {
        return <Text style={styles.item} onPress={() => {
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
  item: {
    alignItems : 'center' ,
    justifyContent : 'center' ,

  },
});

export default ListScreen;