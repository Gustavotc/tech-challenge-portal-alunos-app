import React from 'react';
import { FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTeacherPostsController } from './useTeacherPostsController';
import { IPost } from '@/features/post/domain/interfaces/IPost';
import styles from './Styles';
import PostCard from '../home/components/postCard/PostCard';

const TeacherPosts: React.FC = () => {
  const controller = useTeacherPostsController();

  const renderItem = (item: IPost) => {
    return (
      <PostCard
        post={item}
        onPress={() => controller.handlePostPress(item)}
        style={{ marginBottom: 8 }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Minhas postagens</Text>

      <FlatList
        data={controller.posts}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ flexGrow: 1 }}
      />
    </SafeAreaView>
  );
};

export default TeacherPosts;
