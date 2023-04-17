import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Input from '../../components/ui/Input';
import {Button} from '../../components/ui/Button';
import {useForm} from 'react-hook-form';
import {observer} from 'mobx-react';
import {useRootStore} from '../../base/hooks/useRootStore';
import {LoaderFlex} from '../../components/ui/Loader';
import {auth_screen_styles} from '../styles';

enum EAUTHFORM {
  USERNAME = 'username',
  PASSWORD = 'password',
}

export const AuthScreen = observer(() => {
  const {authStore} = useRootStore();

  const {
    watch,
    setValue,
    register,
    formState: {errors},
    handleSubmit,
  } = useForm();

  const handleChange = (val: string, name: string) => {
    setValue(name, val);
  };

  const sendData = (data: any) => {
    authStore.login(data);
  };

  useEffect(() => {
    register(EAUTHFORM.USERNAME, {required: true});
    register(EAUTHFORM.PASSWORD, {required: true, minLength: 6});
  }, []);

  if (authStore.loader) {
    return <LoaderFlex />;
  }

  return (
    <View style={auth_screen_styles.container}>
      <Text style={auth_screen_styles.title}>INSTAGRAM</Text>
      <View style={auth_screen_styles.wrapper}>
        <Input
          value={watch(EAUTHFORM.USERNAME)}
          placeholder={'username'}
          onChangeText={handleChange}
          inputKey={EAUTHFORM.USERNAME}
          error={''}
        />
        <Input
          value={watch(EAUTHFORM.PASSWORD)}
          placeholder={'password'}
          inputKey={EAUTHFORM.PASSWORD}
          onChangeText={handleChange}
          error={''}
          marginTop={0}
        />
        <Button title={'Enter'} onPress={handleSubmit(sendData)} />
      </View>
    </View>
  );
});
