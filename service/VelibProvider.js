import React,{useState, useEffect, createContext} from 'react';

const url = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel';

export const VelibContext = createContext({});

export const VelibProvider = ({ children }) => {
    const [velibs, setVelibs] = useState([]);

    const update = () => {
        fetch(url)
            .then(response => response.json())
            .then(data => setVelibs (data))
            .catch(() => console.log('ERROR fetch', err));
    };

    useEffect(() =>{
        update()
    },[]);

    return (
        <VelibContext.Provider value={{ velibs, update }}>
            {children}
        </VelibContext.Provider>
    );
};
