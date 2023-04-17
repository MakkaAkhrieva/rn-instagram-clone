import React, {useRef, useState} from 'react';
import {TextInput, TouchableOpacity, View, Text} from 'react-native';
import {input_styles} from '../styles';
import {IInput} from '../types';

const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  editable = true,
  secureTextEntry,
  keyboardType,
  error,
  inputKey,
  handlePressOnIcon,
  icon,
  multiline = false,
  iconPadding,
  marginTop,
  shadow,
  ...props
}: IInput) => {
  const input: any = useRef(null);
  const [showSecure, setShowSecure] = useState(true);

  const handleChange = (text: string) => {
    if (!onChangeText) {
      return;
    }
    onChangeText(text, inputKey);
  };

  const showSecureHandler = () => {
    setShowSecure(!showSecure);
  };

  return (
    <View style={{marginTop: marginTop || 8}}>
      {
        <View>
          <Text>{label}</Text>
        </View>
      }
      <View
        style={
          multiline
            ? [input_styles.inputContainer, {height: 137}]
            : [input_styles.inputContainer, shadow && input.shadowInput]
        }
        pointerEvents={!editable ? 'none' : 'auto'}>
        <TextInput
          ref={input}
          placeholder={placeholder}
          autoCapitalize="none"
          keyboardType={keyboardType ?? 'default'}
          value={value}
          multiline={multiline}
          secureTextEntry={secureTextEntry ? showSecure : false}
          style={input_styles.inputStyle}
          onChangeText={handleChange}
          {...props}
        />
        {secureTextEntry && <TouchableOpacity onPress={showSecureHandler} />}
        {icon && (
          <TouchableOpacity
            style={{marginLeft: iconPadding || 0}}
            onPress={handlePressOnIcon}>
            {icon}
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={input_styles.text}>{error}</Text>}
    </View>
  );
};

export default Input;
