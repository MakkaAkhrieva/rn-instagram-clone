import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './stack/MainStack';
import {AuthStack} from './stack/AuthStack';
import {observer} from 'mobx-react';
import {useRootStore} from '../base/hooks/useRootStore';

export const Navigator = observer(() => {
  const {authStore} = useRootStore();

  useEffect(() => {
    authStore.isAuth();
  }, [authStore]);

  return (
    <NavigationContainer>
      {authStore.token ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
});
