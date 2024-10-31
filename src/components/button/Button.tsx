import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, ViewStyle } from 'react-native';
import styles from './Styles';

type Props = TouchableOpacityProps & {
  title: string;
  style?: ViewStyle;
};

const Button: React.FC<Props> = ({ title, style, ...rest }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} {...rest} style={[style, styles.container]}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
