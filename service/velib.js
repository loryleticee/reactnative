import {AsyncStorage} from 'react-native';
import React from 'react';

const url = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel';

export default VelibService =  async () => {
  const getData = await fetch(url)
    .then((response) => {
      response.json()
    }
    .catch((err) => console.log('VelibService ERROR', err));

   return getData;
}
