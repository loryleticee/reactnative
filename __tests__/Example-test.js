import {
  Text,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';

import renderer from 'react-test-renderer';
import React from "react";

it('renders correctly', () => {
  const tree = renderer
    .create(<><Text>JTETYUDTFYU</Text>
      <MapView
      region = {{
        latitude: 0  ,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation={true}
      zoomEnabled={true}
      followsUserLocation={true}
    >
      <Marker
      coordinate = {{
        latitude: 0,
        longitude: 0,
      }}>

      </Marker>
      </MapView></>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});