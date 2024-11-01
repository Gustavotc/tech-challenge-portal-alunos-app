import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ViewStyle } from 'react-native';

export type IIconName = keyof typeof MaterialCommunityIcons.glyphMap;

export type IIconProps = {
  size: number;
  name: IIconName;
  color?: string;
  style?: ViewStyle;
  onPress?: () => void;
};

const Icon: React.FC<IIconProps> = ({ size, name, color = 'black', style, onPress }) => {
  return (
    <MaterialCommunityIcons name={name} color={color} size={size} onPress={onPress} style={style} />
  );
};

export default Icon;
