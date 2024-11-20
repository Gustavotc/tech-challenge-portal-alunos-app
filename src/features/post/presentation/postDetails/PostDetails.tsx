import React from 'react';
import { Text, View } from 'react-native';
import styles from './Styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usePostDetailsController } from './usePostDetailsController';
import Icon from '@/components/icon/Icon';
import Tag from '@/components/tag/Tag';

const PostDetails: React.FC = () => {
  const controller = usePostDetailsController();

  const formattedDate = Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(controller.post?.date);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Icon name='arrow-left' size={24} onPress={controller.handleGoBack} />
        <Text style={{ flex: 1, textAlign: 'center', fontSize: 18, fontWeight: '500' }}>
          Detalhes do post
        </Text>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.authorContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Icon name='account-circle-outline' size={24} />
            <Text>{controller.post?.author}</Text>
          </View>

          <Text>{formattedDate}</Text>
        </View>

        <Text style={styles.postTitle}>{controller.post?.title}</Text>

        <Text style={{ marginBottom: 16 }}>{controller.post?.description}</Text>

        <Tag text={controller.post?.category ?? ''} />
      </View>
    </SafeAreaView>
  );
};

export default PostDetails;
