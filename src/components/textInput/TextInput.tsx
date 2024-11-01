import React from 'react';
import { TextInputProps, TextInput as RNTextInput, ViewStyle, View, Text } from 'react-native';
import styles from './Styles';
import Icon, { IIconName } from '../icon/Icon';

type IInputIconProps = {
  name: IIconName;
  color?: string;
  onPress?: () => void;
};

type Props = TextInputProps & {
  leftIcon?: IInputIconProps;
  rightIcon?: IInputIconProps;
  errorMessage?: string;
  style?: ViewStyle;
};

const TextInput: React.FC<Props> = ({ leftIcon, rightIcon, style, errorMessage, ...rest }) => {
  return (
    <View style={style}>
      <View style={styles.container}>
        {leftIcon && <Icon {...leftIcon} size={16} style={{ marginRight: 4 }} />}

        <RNTextInput {...rest} style={styles.input} />

        {rightIcon && <Icon {...rightIcon} size={16} style={{ marginLeft: 4 }} />}
      </View>

      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

export default TextInput;
