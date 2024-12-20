import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import FormButtonsRow from './components/formButtonsRow/FormButtonsRow';
import styles from './Styles';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '@/contexts/AuthContext';
import { useCreatePost } from '../../domain/usecases/useCreatePost';
import { ICreatePost } from '../../domain/interfaces/IPost';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/routes/Routes';
import { useEditPost } from '../../domain/usecases/useEditPost';
import Toast from 'react-native-root-toast';
import { useFetchPostById } from '../../domain/usecases/useFetchPostById';
import Icon from '@/components/icon/Icon';
import { useDeletePost } from '../../domain/usecases/useDeletePost';

type CreatePostRouteProp = RouteProp<RootStackParamList, 'PostForm'>;
type PostFormNavigationProps = NativeStackNavigationProp<RootStackParamList, 'PostForm'>;

export const CreatePost: React.FC = () => {
  const navigation = useNavigation<PostFormNavigationProps>();
  const route = useRoute<CreatePostRouteProp>();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);

  const postId = route.params?.postId;
  const isEditing = !!postId;

  const { user } = useAuth();
  const { createPost } = useCreatePost();
  const { editPost } = useEditPost();
  const { fetchPostById } = useFetchPostById();
  const { deletePost } = useDeletePost();

  const handleSave = async () => {
    if (!user) return;

    const post: ICreatePost = {
      title: title.trim(),
      description: description.trim(),
      category: category.trim(),
      userId: user.id,
    };

    let hasError = false;

    if (!title.trim()) {
      setTitleError(true);
      hasError = true;
    }

    if (!description.trim()) {
      setDescriptionError(true);
      hasError = true;
    }

    if (!category.trim()) {
      setCategoryError(true);
      hasError = true;
    }

    if (hasError) return;

    try {
      setLoading(true);
      if (!isEditing) {
        await createPost(post);
      } else {
        if (!postId) return;
        await editPost({
          title,
          description,
          category,
          user_id: user.id,
          post_id: postId,
        });
      }
      navigation.replace('Tabs', { screen: 'TeacherPosts' });
      Toast.show(isEditing ? 'Postagem editada!' : 'Postagem criada!', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
      });
    } catch {
      Toast.show('Erro ao salvar postagem.', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoBack = () => {
    setTitle('');
    setDescription('');
    setCategory('');
    navigation.goBack();
  };

  const fetchPostData = async (postId: string) => {
    try {
      setLoading(true);
      const response = await fetchPostById(postId);

      setTitle(response.title);
      setDescription(response.description);
      setCategory(response.category);
    } catch {
      Toast.show('Falha ao buscar post');
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePost = async () => {
    if (!user || !postId) return;

    try {
      setLoading(true);
      await deletePost(postId, user.id);
      navigation.replace('Tabs', { screen: 'TeacherPosts' });
    } catch {
      Toast.show('Falha ao deletar post');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const postId = route.params?.postId;

    if (!postId) return;

    fetchPostData(postId);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#FFC832', '#F7FF87']} style={styles.background} />
      <View style={styles.card}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{isEditing ? 'EDITAR POST' : 'CRIAR POST'}</Text>
          {isEditing && (
            <Icon name='trash-can-outline' size={32} color='#a30000' onPress={handleDeletePost} />
          )}
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>Título</Text>
          <TextInput
            placeholder='Informe o título do post'
            style={[styles.input, titleError && styles.inputError]}
            value={title}
            onChangeText={(text) => {
              setTitle(text);
              setTitleError(false);
            }}
          />
          {titleError && <Text style={styles.errorText}>Campo obrigatório</Text>}
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>Descrição</Text>
          <TextInput
            placeholder='Comente os detalhes do seu post...'
            style={[styles.input, styles.textArea, descriptionError && styles.inputError]}
            value={description}
            multiline
            onChangeText={(text) => {
              setDescription(text);
              setDescriptionError(false);
            }}
          />
          {descriptionError && <Text style={styles.errorText}>Campo obrigatório</Text>}
        </View>

        <View style={styles.inputView}>
          <Text style={styles.label}>Categoria</Text>
          <TextInput
            placeholder='Informe a categoria'
            style={[styles.input, categoryError && styles.inputError]}
            value={category}
            onChangeText={(text) => {
              setCategory(text);
              setCategoryError(false);
            }}
          />
          {categoryError && <Text style={styles.errorText}>Campo obrigatório</Text>}
        </View>

        <FormButtonsRow loading={loading} handleSave={handleSave} handleGoBack={handleGoBack} />
      </View>
    </SafeAreaView>
  );
};

