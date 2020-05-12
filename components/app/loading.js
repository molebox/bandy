import * as React from "react";
import { ActivityIndicator, useTheme } from "react-native-paper";

const Loading = () => {
  const { colors } = useTheme();
  return <ActivityIndicator animating={true} color={colors.primary} />;
};

export default Loading;
