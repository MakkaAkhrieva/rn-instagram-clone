import React from 'react';
import {ActivityIndicator, ActivityIndicatorProps, View} from 'react-native';
import {Colors} from '../../styles/Colors';
import {loader_styles} from '../styles';

export const Loader = (props: ActivityIndicatorProps) => {
  return <ActivityIndicator size={'large'} color={Colors.blue} {...props} />;
};

export const LoaderFlex = (props: ActivityIndicatorProps) => {
  return (
    <View style={loader_styles.wrapper}>
      <ActivityIndicator size={'large'} color={Colors.blue} {...props} />
    </View>
  );
};
