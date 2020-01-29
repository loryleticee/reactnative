import React,{useState, useEffect} from 'react';
import VelibService from '../../service/velib';

export const VelibContainer = (props) => {
  const Datas = VelibService();
  const [velib, setVelib] = useState(Datas);

  _storeData = async (response) => {
    try {
      await AsyncStorage.setItem('MyStore', response)
    } catch (error) {
      console.log("error stordata")
      // Error saving data
    }
  };

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('MyStore');
      if (value !== null) {
        // We have data!!
        console.log('We have data!!',value);
      }
    } catch (error) {
      console.log('We dont hav', error);
      // Error retrieving data
    }
  };

  useEffect(() => {
    Datas.then((response) => response)
      .then(json => setVelib(json))
      .catch((err) => console.log(err))

  }, []);

  return(
    <>
      <div className={''} style={'top: 9rem'}>
         {/*velib.map()*/}
      </div>
    </>
  )
}
