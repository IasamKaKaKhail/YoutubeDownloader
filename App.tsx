/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Platform,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import NavigationBar from 'react-native-navigation-bar-color';

import Download from './src/screens/Download';
import Favourite from './src/screens/Favorite';
import Orangy from './src/screens/Orangy';


/* Navigations */
import TopTabs from './src/components/navigations/TopTabs'


import MainNavigation from './src/navigations/MainNavigation'


type SectionProps = PropsWithChildren<{
  title: string;
}>;

const colors = {
  lightBlue: "dodgerblue",
  white: "white",
  black: "black",

  primary: "#191A22",
  secondary: "#FFC831"

}

function App(): JSX.Element {

  useEffect(()=>{
    StatusBar.setBarStyle("light-content");
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor(colors.primary);
    }
    else if(Platform.OS === 'ios'){
      <SafeAreaView style={styles.sectionContainer}>
        <StatusBar barStyle="light-content" />
        StatusBar.setBackgroundColor(colors.primary)
      </SafeAreaView>
    }
    NavigationBar(colors.primary);
  }, [])

  return (
    <MainNavigation />
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex:1,
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;