import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, ViewStyle, View } from 'react-native';
import styles from './Styles';

type Props = TouchableOpacityProps & {
  title: string;
  style?: ViewStyle;
};

const Button: React.FC<Props> = ({ title, style, ...rest }) => {
  return (
    <View style={[style, { width: style?.width ?? '100%' }]}>
      <TouchableOpacity activeOpacity={0.7} {...rest} style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
