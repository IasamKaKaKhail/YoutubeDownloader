import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Paste} from './Paste';
import {YoutubeSearch} from './Search';

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Paste" component={Paste} />
        <Stack.Screen name="Search" component={YoutubeSearch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}