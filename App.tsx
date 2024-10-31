import React from 'react';
import { registerRootComponent } from 'expo';
import Routes from '@/Routes';

const App: React.FC = () => {
  return <Routes />;
};

export default App;

registerRootComponent(App);
