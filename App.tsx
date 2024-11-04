import React from 'react';
import { registerRootComponent } from 'expo';
import Routes from '@/Routes';
import Toast from 'react-native-toast-message';

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <Toast />
    </>
  );
};

export default App;

registerRootComponent(App);
