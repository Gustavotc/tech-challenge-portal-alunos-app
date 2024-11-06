import React from 'react';
import { Image, ImageBackground, ScrollView, View } from 'react-native';
import { useLoginController } from './useLoginController';
import styles from './Styles';
import TextInput from '@/components/textInput/TextInput';
import Button from '@/components/button/Button';
import Logo from '@/../assets/images/logo.png';
import Background from '@/../assets/images/background.png';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Controller } from 'react-hook-form';
import Icon from '@/components/icon/Icon';

const Login: React.FC = () => {
  const controller = useLoginController();

  return (
    <ImageBackground source={Background} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Icon
          name='arrow-left'
          size={24}
          onPress={controller.handleGoBack}
          style={{ alignSelf: 'flex-start', marginLeft: 16 }}
        />

        <ScrollView style={{ flex: 1, width: '100%' }}>
          <Image source={Logo} style={styles.logo} />

          <View style={styles.textInputComponent}>
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
          </View>

          <Button
            title='Login'
            onPress={controller.handleSignIn}
            style={{ alignSelf: 'center', marginTop: 32, width: '70%', marginBottom: 80 }}
          />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Login;
