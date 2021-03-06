import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import {VelibProvider} from './service/VelibProvider';

const App = () =>{
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <VelibProvider>
        <AppNavigator />
      </VelibProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;

// vue recherche

//modal (bloquant)

//usecontext()   OR <MyContext.consumer></MyContext.consumer>
