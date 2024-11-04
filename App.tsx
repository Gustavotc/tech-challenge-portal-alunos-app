import React from 'react';
import { registerRootComponent } from 'expo';
import Routes from '@/routes/Routes';
import { RootSiblingParent } from 'react-native-root-siblings';
import { AuthProvider } from '@/contexts/AuthContext';

const App: React.FC = () => {
  return (
    <RootSiblingParent>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </RootSiblingParent>
  );
};

export default App;

registerRootComponent(App);
