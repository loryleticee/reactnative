import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ListScreen from '../screens/ListScreen';
import MapScreen from '../screens/MapScreen';
import VelibScreen from '../screens/VelibScreen';
//import velibContainer from '../component/container/ListContainer';

const ListStack = createStackNavigator(
    {
        Home: ListScreen,
    }
);

ListStack.navigationOptions = {
    tabBarLabel: 'List',
};

const MapStack = createStackNavigator(
    {
        Links: MapScreen,
    }
);

MapStack.navigationOptions = {
    tabBarLabel: 'map',
};

export default createBottomTabNavigator({
    ListStack,
    MapStack,
});
