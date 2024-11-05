import React from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { useRegisterController } from './useRegisterController';
import styles from './Styles';
import TextInput from '@/components/textInput/TextInput';
import Button from '@/components/button/Button';
import Logo from '@/../assets/images/logo.png';
import Background from '@/../assets/images/background.png';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Controller } from 'react-hook-form';

const Register: React.FC = () => {
  const controller = useRegisterController();

  return (
    <ImageBackground source={Background} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Image source={Logo} style={styles.logo} />

        <View style={styles.TextInputComponent}>
          <Controller
            name='email'
            control={controller.control}
            render={({ field: { value, onChange } }) => (
              <TextInput
                placeholder='Nome'
                value={value}
                onChangeText={onChange}
                errorMessage={controller.errors.email?.message}
                leftIcon={{ name: 'account' }}
                keyboardType='default'
                style={{ marginTop: 32 }}
              />
            )}
          />

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

          <Controller
            name='password'
            control={controller.control}
            render={({ field: { value, onChange } }) => (
              <TextInput
                placeholder='Confirmar Senha'
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
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title='Create Account'
            onPress={controller.handleSignIn}
            style={{ marginTop: 32 }}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Register;
