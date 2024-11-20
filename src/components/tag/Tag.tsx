import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  text: string;
};

const Tag: React.FC<Props> = ({ text }) => {
  return (
    <View
      style={{
        backgroundColor: 'orange',
        borderRadius: 50,
        paddingVertical: 4,
        paddingHorizontal: 16,
        alignSelf: 'baseline',
      }}>
      <Text style={{ fontWeight: '500' }}>{text}</Text>
    </View>
  );
};

export default Tag;
