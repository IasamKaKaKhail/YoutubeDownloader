import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';


import Download from '../../screens/Download';


const Stack = createStackNavigator();

const DownloadStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DownloadScreen" component={Download} />
    </Stack.Navigator>
  );
};

  
  export default DownloadStack