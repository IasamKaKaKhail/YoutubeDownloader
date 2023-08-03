import { ComponentType } from 'react'

interface ScreenType {
    name: keyof TabParamsList;
    component: ComponentType<any>;
}
  
  
interface NavigationProps {
    screens: ScreenType[];
    initialRouteName: keyof TabParamsList;
}


type ScreenNames = string;

type TabParamsList = {
  [K in ScreenNames]: object;
};
  
  
  
  


export type {
    NavigationProps,
    ScreenType,
    TabParamsList,
}