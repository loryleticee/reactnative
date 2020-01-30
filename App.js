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
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});

export default App;

// vue recherche

//details

//modal (bloquant)

//createContext ()

//export createContext

//usecontext()   OR <MyContext.consumer></MyContext.consumer>
