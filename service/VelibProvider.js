import React,{useState, useEffect, createContext} from 'react';

const url = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel';

export const VelibContext = createContext({});

export const VelibProvider = ({ children }) => {
  const [velibs, setVelibs] = useState([]);
  const [userLocation, setUserLocation] = useState([]);

  const RADIUS_DISTANCE = 1000;

  const getPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
          resolve(position);
      }, reject);
    })
  };

  const update = async () => {
    const position = await getPosition();

    setUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
    );

    const link = url + '&geofilter.distance='
      + position.coords.latitude + ','
      + position.coords.longitude + ','
      + RADIUS_DISTANCE;

    return fetch(link )
      .then(response => response.json())
      .then(data =>  data)
      .catch((error) => console.log('ERROR fetch', error))
  };

  useEffect(() => {
    update().then(datas => {
      setVelibs(datas)
    })
    .catch((error) => console.log("ERROR IN USEFFECT(): "+ error));
  },[]);

  return (
    <VelibContext.Provider value={{ velibs, userLocation, update }}>
        {children}
    </VelibContext.Provider>
  );
};
