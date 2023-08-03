import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

/* Screens */
import Favourite from '../../screens/Favorite';

const Stack = createStackNavigator();

const FavoriteStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="FavouriteScreen" component={Favourite} />
      </Stack.Navigator>
    );
  };

  
  export default FavoriteStack