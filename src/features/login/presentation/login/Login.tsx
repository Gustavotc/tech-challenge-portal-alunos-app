import React from 'react';
import { Image, ScrollView } from 'react-native';
import { useLoginController } from './useLoginController';
import styles from './Styles';
import TextInput from '@/components/textInput/TextInput';
import Button from '@/components/button/Button';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '@/../assets/images/logo.png';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Controller } from 'react-hook-form';

const Login: React.FC = () => {
  const controller = useLoginController();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#FFC832', '#F7FF87']} style={styles.background} />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps='handled'>
        <Image source={Logo} style={styles.logo} />

        <Controller
          name='email'
          control={controller.control}
          render={({ field: { value, onChange } }) => (
            <TextInput
              placeholder='Email'
              value={value}
              onChangeText={onChange}
              errorMessage={controller.errors.email?.message}
              leftIcon={{ name: 'email-outline' }}
              autoCapitalize='none'
              keyboardType='email-address'
              style={{ marginTop: 32 }}
            />
          )}
        />

        <Controller
          name='password'
          control={controller.control}
          render={({ field: { value, onChange } }) => (
            <TextInput
              placeholder='Senha'
              value={value}
              onChangeText={onChange}
              errorMessage={controller.errors.password?.message}
              secureTextEntry={controller.hidePassword}
              autoCapitalize='none'
              autoComplete='off'
              leftIcon={{ name: 'lock-outline' }}
              rightIcon={{
                name: controller.hidePassword ? 'eye-off' : 'eye',
                onPress: controller.toggleHidePassword,
              }}
              style={{ marginTop: 24 }}
            />
          )}
        />

        <Button title='Login' onPress={controller.handleSignIn} style={{ marginTop: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
