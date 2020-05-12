import * as React from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";

const MainContainer = ({ children }) => {
  const { colors } = useTheme();

  return (
    <View
      sx={{
        flex: 1,
        backgroundColor: colors.background,
        marginTop: 10,
      }}
    >
      {children}
    </View>
  );
};

export default MainContainer;
