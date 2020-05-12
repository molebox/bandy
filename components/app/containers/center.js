import * as React from "react";
import { View } from "react-native";

const Center = ({ children }) => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {children}
  </View>
);

export default Center;
