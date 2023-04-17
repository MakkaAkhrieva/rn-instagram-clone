import React from 'react';
import {SCREENS} from '../screens/Screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../../screens/main/HomeScreen';
import {SearchScreen} from '../../screens/main/SearchScreen';
import {IconSvgBottomHome} from '../../assets/bottomtab/IconSvgBottomHome';
import {IconSvgBottomSearch} from '../../assets/bottomtab/IconSvgBottomSearch';
import {IconSvgBottomHomeActive} from '../../assets/bottomtab/IconSvgBottomHomeActive';
import {NotificationScreen} from '../../screens/main/NotificationScreen';
import {VideoScreen} from '../../screens/main/VideoScreen';
import {ProfileScreen} from '../../screens/main/ProfileScreen';
import {IconSvgBottomAdd} from '../../assets/bottomtab/IconSvgBottomAdd';
import {IconSvgBottomLikes} from '../../assets/bottomtab/IconSvgBottomLikes';

export const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  const tabBarHomeIcon = ({focused}) => {
    return focused ? <IconSvgBottomHomeActive /> : <IconSvgBottomHome />;
  };

  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: tabBarHomeIcon,
        }}
      />
      <Tab.Screen
        name={SCREENS.SEARCH}
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <IconSvgBottomSearch />;
          },
        }}
      />
      <Tab.Screen
        name={SCREENS.VIDEO}
        component={VideoScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <IconSvgBottomAdd />;
          },
        }}
      />
      <Tab.Screen
        name={SCREENS.NOTIFICATION}
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <IconSvgBottomLikes />;
          },
        }}
      />
      <Tab.Screen
        name={SCREENS.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return <IconSvgBottomHome />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
