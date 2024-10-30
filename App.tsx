import React from "react";
import { View, Text } from "react-native";
import { registerRootComponent } from "expo";

const App: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Teste</Text>
    </View>
  );
};

export default App;

registerRootComponent(App);
