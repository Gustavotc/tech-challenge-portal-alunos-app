import React from 'react';
import { Text, FlatList, View } from 'react-native';
import { useFeedController } from './useFeedController';
import EmptyPostsList from './components/emptyPostsList/EmptyPostsList';
import styles from './Styles';
import { IPost } from '../../domain/models/Post';
import TextInput from '@/components/textInput/TextInput';
import PostCard from './components/postCard/PostCard';
import FeedTopBar from './components/feedTopBar/FeedTopBar';

const Feed: React.FC = () => {
  const controller = useFeedController();

  const renderItem = (item: IPost) => {
    return <PostCard post={item} style={{ marginBottom: 16 }} />;
  };

  return (
    <View style={{ flex: 1 }}>
      <FeedTopBar />

      <View style={styles.container}>
        <Text style={styles.title}>Posts</Text>

        <TextInput
          leftIcon={{ name: 'magnify' }}
          placeholder='Pesquisar posts'
          value={controller.search}
          onChangeText={controller.handleSearch}
          style={{ marginBottom: 16 }}
        />

        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          data={controller.posts}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={EmptyPostsList}
          onEndReached={controller.onEndReached}
        />
      </View>
    </View>
  );
};

export default Feed;
