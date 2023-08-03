import  React, { ComponentType} from 'react'
import { Pressable, View, Text, SafeAreaView } from "react-native";

// navigations
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// styles
import styles from "./styles";

/* Screen  */
import Songs from '../../../screens/Download/Songs';
import Videos from '../../../screens/Download/Videos';

/* types */
import { 
  NavigationProps, 
  ScreenType, 
  TabParamsList 
} from '../../../types/navTypes'

const ThemeColors = {
    lightBlue: "dodgerblue",
    white: "white",
    black: "black",

    primary: "#191A22",
    secondary: "#FFC831"

}


const Tab = createMaterialTopTabNavigator<TabParamsList>();

function Navigation(
  { screens, initialRouteName }: NavigationProps
) {
  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      tabBar={({ navigation, state }) => (
        <SafeAreaView style={styles.topTabsContainer}>
          <View style={styles.topTabs}>
            {state.routes.map((route, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={route.key}
                  style={[
                    styles.singleTab,
                    {
                      backgroundColor: isFocused
                        ? ThemeColors.secondary
                        : ThemeColors.primary,
                    },
                  ]}
                  onPress={() => navigation.navigate(route.name)}
                >
                  <Text
                    style={{
                      color: isFocused
                        ? ThemeColors.black
                        : ThemeColors.secondary,
                    }}
                  >
                    {route.name.toLowerCase()}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </SafeAreaView>
      )}
    >
      {
        screens.map(({ name, component }) => (
          <Tab.Screen key={name} name={name} component={component} />
        ))
      }
    </Tab.Navigator>
  );
}

export default Navigation;