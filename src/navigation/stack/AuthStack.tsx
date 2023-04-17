import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../screens/Screens';
import {AuthScreen} from '../../screens/auth/AuthScreen';
import {RegistrationScreen} from '../../screens/auth/RegistrationScreen';

export const AuthStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREENS.AUTH} component={AuthScreen} />
      <Stack.Screen
        name={SCREENS.REGISTRATION}
        component={RegistrationScreen}
      />
    </Stack.Navigator>
  );
};
