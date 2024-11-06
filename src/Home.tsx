import { Text, ImageBackground, SafeAreaView, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';

import Logo from '@/../assets/images/logo.png';
import Background from '@/../assets/images/background.png';
import Button from '@/components/button/Button';

import styles from './Styles';
import { RootStackParamList } from './routes/Routes';

const Home: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

  return (
    <ImageBackground source={Background} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Image source={Logo} style={styles.logo} />

        <View style={styles.textContainer}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>Here, we share knowledge and learn together</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title='Login'
            onPress={() => navigation.navigate('Login')}
          />
          <Button
            style={styles.button}
            title='Sign Up'
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;
