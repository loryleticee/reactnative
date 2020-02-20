import React,{useState, useEffect, createContext} from 'react';
import { VELIB_API_URL } from "react-native-dotenv";

export const VelibContext = createContext({});

export const VelibProvider = ({ children }) => {
  const [velibs, setVelibs] = useState([]);
  const [userLocation, setUserLocation] = useState([]);
  const [velibsFavorites, setVelibFavorites] = useState([]);

  const RADIUS_DISTANCE = 1000;


  const  addVelibToFav = (station) => {
    let inArray = false;
    console.log('SUCCES', station);
    velibsFavorites.map((item, index) =>{
      if (velibsFavorites[index]["name"] === item.name) {
        inArray = true;
        return false
      }
    });

    if (inArray == false) {
      setVelibFavorites([
        ...velibsFavorites,
        {
          name: station.name,
          geo: station.geo,
          nbbike: station.nbbike,
          nbebike: station.nbebike,
          creditCard: station.creditCard,
          dist: station.dist,
          record_timestamp: station.date
        }
      ]);
    }
  }

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

    const link = VELIB_API_URL + '&rows=200&geofilter.distance='
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
    <VelibContext.Provider value={{ velibs, userLocation, update, addVelibToFav }}>
        {children}
    </VelibContext.Provider>
  );
};
