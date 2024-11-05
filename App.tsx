import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { registerRootComponent } from 'expo';
import Routes from '@/Routes';

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

  return <Routes />;
};

SplashScreen.preventAutoHideAsync();

export default App;

registerRootComponent(App);
