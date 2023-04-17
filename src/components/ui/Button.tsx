import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {button} from '../styles';
import {IButton} from '../types';

export const Button = ({title, onPress, marginTop = 16}: IButton) => {
  return (
    <TouchableOpacity style={[button.button, {marginTop}]} onPress={onPress}>
      <Text style={button.button_text}>{title}</Text>
    </TouchableOpacity>
  );
};
