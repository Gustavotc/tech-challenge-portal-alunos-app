import React from 'react';
import { Text, Image } from 'react-native';
import { useLoginController } from './useLoginController';
import styles from './Styles';
import TextInput from '@/components/textInput/TextInput';
import Button from '@/components/button/Button';
import { LinearGradient } from 'expo-linear-gradient';
import Logo from '@/../assets/images/logo.png';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login: React.FC = () => {
  const controller = useLoginController();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#FFC832', '#F7FF87']} style={styles.background} />

      <Image source={Logo} style={styles.logo} />

      <TextInput
        placeholder='Email'
        value={controller.email}
        onChangeText={controller.setEmail}
        style={{ marginTop: 32 }}
      />

      <TextInput
        placeholder='Senha'
        value={controller.password}
        onChangeText={controller.setPassword}
        secureTextEntry
        style={{ marginTop: 24 }}
      />

      <Button
        title='Login'
        onPress={controller.handleSignIn}
        style={{ marginTop: 32, width: 200 }}
      />
    </SafeAreaView>
  );
};

export default Login;
