import React from 'react';
import {AsyncStorage} from 'react-native';

export const VelibCache = (props) => {

   const  _storeData = async (props) => {
        try {
            await AsyncStorage.setItem('velibs', JSON.stringify(props))
        } catch (error) {
            console.log("error setItem ")
            // Error saving data
        }
    };

    const _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('velibs');
            if (value !== null) {
                // We have data!!
               return value;
            }
        } catch (error) {
            console.log('error retrivItem', error);
            // Error retrieving data
        }
    };
};
