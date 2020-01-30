import React, {useContext} from 'react';

import {
    StyleSheet,
    Text,
    FlatList,
} from 'react-native';

import {VelibContext} from '../service/VelibProvider';
import {View} from "react-native-web";

const DetailScreen = ({navigation}) =>{

    const context = useContext(VelibContext);
    const datas = navigation.getParam('data');

    console.log('COOOOOOO', context);
    console.log('UTFYIGUO', datas);

    return (
        <View>
            <Text>
                {datas}
            </Text>
        </View>
    );
};

DetailScreen.navigationOptions = {
    title: "Vélibs",
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default DetailScreen;
