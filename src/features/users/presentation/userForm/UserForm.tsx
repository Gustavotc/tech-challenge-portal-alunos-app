import React from 'react';
import { TextInput, View, Text, ScrollView } from 'react-native';
import Icon from '@/components/icon/Icon';
import FormButtonsRow from '@/features/post/presentation/createPost/components/formButtonsRow/FormButtonsRow';
import styles from './Styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useUserFormController } from './useUserFormController';
import { Controller } from 'react-hook-form';

const UserForm: React.FC = () => {
  const controller = useUserFormController();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#FFC832', '#F7FF87']} style={styles.background} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
              {controller.isEditing ? 'EDITAR USUÁRIO' : 'CRIAR USUÁRIO'}
            </Text>
            {controller.isEditing && (
              <Icon
                name='trash-can-outline'
                size={32}
                color='#a30000'
                onPress={controller.handleDeleteUser}
              />
            )}
          </View>

          <View style={styles.inputView}>
            <Text style={styles.label}>Nome</Text>

            <Controller
              control={controller.control}
              name='name'
              render={({ field: { value, onChange } }) => (
                <TextInput
                  placeholder='Informe o nome do usuário'
                  style={[styles.input, false && styles.inputError]}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            {controller.errors.name?.message && (
              <Text style={styles.errorText}>{controller.errors.name.message}</Text>
            )}
          </View>

          <View style={styles.inputView}>
            <Text style={styles.label}>E-mail</Text>

            <Controller
              control={controller.control}
              name='email'
              render={({ field: { value, onChange } }) => (
                <TextInput
                  placeholder='Informe o e-mail do usuário'
                  style={[styles.input, false && styles.inputError]}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            {controller.errors.email?.message && (
              <Text style={styles.errorText}>{controller.errors.email.message}</Text>
            )}
          </View>

          <View style={styles.inputView}>
            <Text style={styles.label}>Senha</Text>

            <Controller
              control={controller.control}
              name='password'
              render={({ field: { value, onChange } }) => (
                <TextInput
                  placeholder='Informe a senha do usuário'
                  style={[styles.input, false && styles.inputError]}
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry
                />
              )}
            />
            {controller.errors.password?.message && (
              <Text style={styles.errorText}>{controller.errors.password.message}</Text>
            )}
          </View>

          <View style={styles.inputView}>
            <Text style={styles.label}>Categoria</Text>

            <Controller
              control={controller.control}
              name='role'
              render={({ field: { value, onChange } }) => (
                <TextInput
                  placeholder='Informe a categoria do usuário'
                  style={[styles.input, false && styles.inputError]}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
            {controller.errors.role?.message && (
              <Text style={styles.errorText}>{controller.errors.role.message}</Text>
            )}
          </View>

          <FormButtonsRow
            loading={controller.loading}
            handleSave={controller.handleSave}
            handleGoBack={controller.handleGoBack}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserForm;
