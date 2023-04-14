import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Colors} from '../../styles/Colors';

interface IButton {
  title: string;
  onPress: () => void;
  marginTop?: number;
}

export const Button = ({title, onPress, marginTop = 16}: IButton) => {
  return (
    <TouchableOpacity style={[styles.button, {marginTop}]} onPress={onPress}>
      <Text style={styles.button_text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 29,
    borderRadius: 8,
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_text: {
    color: Colors.white,
    alignItems: 'center',
  },
});
