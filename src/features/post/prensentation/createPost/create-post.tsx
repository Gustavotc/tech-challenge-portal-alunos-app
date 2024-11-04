import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import FormButtonsRow from '../createPost/components/formButtonsRow/FormButtosnRow';
import styles from './Styles';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

export const CreatePost = () => {
    const navigation = useNavigation();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);

    const isEditing = false;

    const handleSave = () => {
        setLoading(true);

        const feedbackMessage = isEditing
            ? 'A postagem foi editada com sucesso.'
            : 'A postagem foi criada com sucesso.';

        Toast.show({
            type: 'success',
            text1: feedbackMessage,
        });

        setLoading(false);
    };

    const handleGoBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient colors={['#FFC832', '#F7FF87']} style={styles.background} />
            <View style={styles.card}>
                <Text style={styles.titleText}>
                    {isEditing ? 'EDITAR POST' : 'CRIAR POST'}
                </Text>

                <Text style={styles.label}>Título</Text>
                <TextInput
                    placeholder="Informe o título do post"
                    style={styles.input}
                    placeholderTextColor="#888"
                    value={title}
                    onChangeText={setTitle}
                />

                <Text style={styles.label}>Descrição</Text>
                <TextInput
                    placeholder="Comente os detalhes do seu post..."
                    style={[styles.input, styles.textArea]}
                    placeholderTextColor="#888"
                    value={description}
                    multiline
                    numberOfLines={5}
                    onChangeText={setDescription}
                />

                <Text style={styles.label}>Categoria</Text>
                <TextInput
                    placeholder="Informe a categoria"
                    style={styles.input}
                    placeholderTextColor="#888"
                    value={category}
                    onChangeText={setCategory}
                />

                <FormButtonsRow
                    loading={loading}
                    handleSave={handleSave}
                    handleGoBack={handleGoBack}
                />
            </View>
        </SafeAreaView>
    );
};

