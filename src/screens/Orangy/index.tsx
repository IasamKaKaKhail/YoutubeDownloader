import React, {} from 'react';
import {View, Text, Pressable, Image, TextInput, FlatList} from 'react-native';

import { Paste } from './Paste';


import styles from './styles';

/* Configs */
import { colors } from '../../configs/colors'

/* Navigations */
import TopTabs from '../../components/navigations/TopTabs'


/* Types  */
import { TabParamsList, ScreenType} from '../../types//navTypes'


const screens: ScreenType[] = [
  { name: "Youtube", component: Paste },
];


const Orangy = ({}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.txt3}>Orangy</Text>
      <TopTabs screens={screens} initialRouteName={screens[0].name}/>
    </View>
  );
};



export default Orangy;
