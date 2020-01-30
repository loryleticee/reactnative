import React,{useState, useEffect, createContext} from 'react';
import {get} from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const url = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel';

export const VelibContext = createContext({});

export const VelibProvider = ({ children }) => {
    const [velibs, setVelibs] = useState([]);
    const RADIUS_DISTANCE = 1000;
  /*  const pos = [48,86,
        2,333333];
*/
    const update = () => {
        const getPosition = () => {
            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition((position) => {
                    resolve(position);
                }, reject);
            })
        };

        const fetchVelib = async () => {
            const position = await getPosition();

            const link = url + '&geofilter.distance='
                + position.coords.latitude + ','
                + position.coords.longitude + ','
                + RADIUS_DISTANCE;

            return fetch(link )
                .then(response => response.json())
                .then(data =>  data)
                .catch((error) => console.log('ERROR fetch', error))
        };

        return fetchVelib()
    };

    useEffect(() =>{
        update()
            .then(datas => {
                setVelibs(datas)
            })
            .catch((error) => console.log("ERROR IN USEFFECT: "+ error));
    },[]);

    return (
        <VelibContext.Provider value={{ velibs, update }}>
            {children}
        </VelibContext.Provider>
    );
};
