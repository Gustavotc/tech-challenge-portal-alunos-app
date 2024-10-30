import React from "react";
import { registerRootComponent } from "expo";
import Routes from "./src/Routes";

const App: React.FC = () => {
  return <Routes />;
};

export default App;

registerRootComponent(App);
