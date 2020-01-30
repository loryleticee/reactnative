import React from 'react';

const url = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel';

export default VelibService =  async () => {
  return await fetch(url)
    .then((response) => response.json())
    .catch((err) => err)
}
