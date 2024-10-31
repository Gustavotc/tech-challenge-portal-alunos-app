import React from 'react';
import { TextInputProps, TextInput as RNTextInput, ViewStyle } from 'react-native';
import styles from './Styles';

type Props = TextInputProps & {
  style?: ViewStyle;
};

const TextInput: React.FC<Props> = ({ style, ...rest }) => {
  return <RNTextInput value='Teste' {...rest} style={[style, styles.input]} />;
};

export default TextInput;
