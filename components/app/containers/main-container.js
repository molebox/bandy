import * as React from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";

const MainContainer = ({ children }) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      {children}
    </View>
  );
};

export default MainContainer;
