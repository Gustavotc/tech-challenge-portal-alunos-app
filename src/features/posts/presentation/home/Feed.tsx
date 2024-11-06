import React from 'react';
import { Text, FlatList } from 'react-native';
import { useFeedController } from './useFeedController';
import EmptyPostsList from './components/emptyPostsList/EmptyPostsList';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Styles';
import { IPost } from '../../domain/models/Post';
import TextInput from '@/components/textInput/TextInput';
import PostCard from './components/postCard/PostCard';
import Icon from '@/components/icon/Icon';

const Feed: React.FC = () => {
  const controller = useFeedController();

  const renderItem = (item: IPost) => {
    return <PostCard post={item} style={{ marginBottom: 16 }} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Icon name='exit-run' size={32} onPress={controller.handleSignOut} />

      <Icon name='file-document' size={32} onPress={controller.handleCreatePost} />

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
    </SafeAreaView>
  );
};

export default Feed;
