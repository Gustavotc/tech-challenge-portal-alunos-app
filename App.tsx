import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { registerRootComponent } from 'expo';
import { RootSiblingParent } from 'react-native-root-siblings';
import { AuthProvider } from '@/contexts/AuthContext';
import Routes from '@/routes/Routes';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  useEffect(() => {
    const prepare = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <RootSiblingParent>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </RootSiblingParent>
  );
};

SplashScreen.preventAutoHideAsync();

export default App;

registerRootComponent(App);
