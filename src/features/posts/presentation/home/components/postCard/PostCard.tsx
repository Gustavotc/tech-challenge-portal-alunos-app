import React from 'react';
import { Text, ViewStyle, TouchableOpacity } from 'react-native';
import styles from './Styles';
import { IPost } from '@/features/post/domain/interfaces/IPost';

type Props = {
  post: IPost;
  onPress: () => void;
  style?: ViewStyle;
};

const PostCard: React.FC<Props> = ({ post, onPress, style }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={[style, styles.container]}>
      <Text style={styles.title}>{post.title}</Text>

      <Text style={styles.description}>{post.description}</Text>
    </TouchableOpacity>
  );
};

export default PostCard;
