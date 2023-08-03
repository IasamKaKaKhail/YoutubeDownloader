import React, {useState, ComponentType} from 'react';
import {View, SafeAreaView, Text, Pressable, FlatList, Image} from 'react-native';
import ytsr from 'ytsr';

/* Configs */
import { colors } from '../../configs/colors'

/* Styles */
import styles from './styles';

/* Screens */
import Videos from './Videos';

/* Navigations */
import TopTabs from '../../components/navigations/TopTabs'

/* Types  */
import { TabParamsList, ScreenType} from '../../types//navTypes'

/* Screens */
import Songs from './Songs';



const screens: ScreenType[] = [
  { name: "Videos", component: Videos },
  { name: "Songs", component: Songs },
];


const Download = ({}) => {
  const [show, setshow] = useState(false);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={{fontSize: 20, color: colors.white, fontWeight: '600'}}>
        Downloads
      </Text>
      <TopTabs screens={screens} initialRouteName={screens[0].name}/>
    </SafeAreaView>
  );
};


export default Download;
