import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import styles from './Styles';
import { IPost } from '@/features/posts/domain/models/Post';

type Props = {
  post: IPost;
  style?: ViewStyle;
};

const PostCard: React.FC<Props> = ({ post, style }) => {
  return (
    <View style={[style, styles.container]}>
      <Text style={styles.title}>{post.title}</Text>

      <Text style={styles.description}>{post.description}</Text>
    </View>
  );
};

export default PostCard;
