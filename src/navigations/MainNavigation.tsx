import React, { useEffect } from 'react';
import { StatusBar, TouchableOpacity, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import {
  ArrowDown,
  SearchStatus,
  Heart
} from 'iconsax-react-native'


/* Stacks */
import DownloadStack from './Download';
import OrangyStack from './Orangy';
import FavoriteStack from './Favorite';

/* Configs */
import { colors } from '../configs/colors'

/* Styles */
import styles from './styles';


const Tab = createBottomTabNavigator();

type RenderTabIconProps = {
  routeName: string;
  isFocused: boolean;
};

function RenderTabIcon({ routeName, isFocused }: RenderTabIconProps,props:any)  {
  if(routeName === 'Downloads'){
    return (
        <ArrowDown size={'80%'} style={styles.tabBarIconImage} color={isFocused ? colors.yellow: colors.black1} variant="Bold"/>
    )
  }
  if(routeName === 'Orangy'){
    return (
        <SearchStatus size={'80%'} style={styles.tabBarIconImage} color={isFocused  ? colors.yellow: colors.black1} variant="Bold"/>
    )
  }
  if(routeName === 'Favorites'){
    return (
        <Heart size={'80%'} style={styles.tabBarIconImage} color={isFocused ? colors.yellow: colors.black1} variant="Bold"/>
    )
  }
}

type CustomTabbarProps = {
  state: any;
  descriptors: any;
  navigation: any;
};

function CustomTabbar({ state, descriptors, navigation }: CustomTabbarProps) {
  /* const insets = useSafeAreaInsets(); */
  return (

    <View style={{ backgroundColor: '#26272A' }}>

      <View style={[styles.tabbarContainer, { paddingBottom: 0/* insets.bottom  */}]}>
        {state.routes.map(
          (route: { key: string | number; name: any }, index: any) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                  ? options.title
                  : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                key={route.name}
                style={[styles.tabItemContainer]}>
                <>
                  <RenderTabIcon routeName={route.name} isFocused={isFocused} />
                </>
              </TouchableOpacity>
            );
          },
        )}
      </View>
    </View>
  );
}




export default function BottomTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <CustomTabbar {...props} />}
        screenOptions={{
          headerShown: false,
          /* unmountOnBlur:true */
        }}>
        <Tab.Screen name="Downloads" component={DownloadStack} />
        <Tab.Screen name="Orangy" component={OrangyStack} />
        <Tab.Screen name="Favorites" component={FavoriteStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};