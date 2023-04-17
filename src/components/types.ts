import {ReactNode} from 'react';

export interface IInput {
  label?: string;
  placeholder?: string;
  value?: string | undefined;
  renderRightAccessory?: any;
  editable?: boolean;
  style?: any;
  onChangeText?(value: string, inputKey: string): void;
  handlePressOnIcon?: () => void;
  icon?: ReactNode;
  secureTextEntry?: boolean;
  keyboardType?: any;
  inputKey: string;
  error: string | undefined;
  disabled?: boolean;
  multiline?: boolean;
  maxLength?: number;
  marginTop?: number;
  iconPadding?: number;
  shadow?: boolean;
}

export interface IButton {
  title: string;
  onPress: () => void;
  marginTop?: number;
}
