import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Paste} from '../../screens/Orangy/Paste';
import YoutubeSearch from './../../screens/Orangy/Search';

import Orangy  from '../../screens/Orangy';
import DownloadNext from '../../screens/Orangy/Download';


const Stack = createStackNavigator();



const OrangyStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OrangyScreen" component={Orangy} />
        <Stack.Screen name="DownloadNext_Screen" component={DownloadNext} />
        <Stack.Screen name="Paste" component={Paste} />
        <Stack.Screen name="Search" component={YoutubeSearch} />
      </Stack.Navigator>
    );
};

export default OrangyStack