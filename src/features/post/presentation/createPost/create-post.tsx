import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FormButtonsRow from './components/formButtonsRow/FormButtonsRow';
import styles from './Styles';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '@/contexts/AuthContext';
import { useCreatePost } from '../../domain/usecases/useCreatePost';
import { ICreatePost } from '../../domain/interfaces/IPost';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/routes/Routes';

type IFeedTopBarNavigationProps = NativeStackNavigationProp<RootStackParamList, 'Feed'>;

export const CreatePost: React.FC = () => {
  const navigation = useNavigation<IFeedTopBarNavigationProps>();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);

  const { user } = useAuth();
  const { createPost } = useCreatePost();

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
    } else {
      setTitleError(false);
    }

    if (!description.trim()) {
      setDescriptionError(true);
      hasError = true;
    } else {
      setDescriptionError(false);
    }

    if (!category.trim()) {
      setCategoryError(true);
      hasError = true;
    } else {
      setCategoryError(false);
    }

    if (hasError) return;

    try {
      setLoading(true);
      await createPost(post);

      navigation.navigate('TeacherPosts');
    } catch {
      // Tratar erros de criação
    } finally {
      setLoading(false);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#FFC832', '#F7FF87']} style={styles.background} />
      <View style={styles.card}>
        <Text style={styles.titleText}>CRIAR POST</Text>

        <View style={styles.inputView}>
          <Text style={styles.label}>Título</Text>
          <TextInput
            placeholder='Informe o título do post'
            style={styles.input}
            placeholderTextColor='#888'
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
            style={[styles.input, styles.textArea]}
            placeholderTextColor='#888'
            value={description}
            multiline
            numberOfLines={5}
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
            style={styles.input}
            placeholderTextColor='#888'
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
