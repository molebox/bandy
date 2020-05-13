import { AntDesign } from "@expo/vector-icons";
import * as React from "react";
import { useTheme } from "react-native-paper";

export default function TabBarIcon(props) {
  const { colors } = useTheme();
  return (
    <AntDesign
      name={props.name}
      size={30}
      style={{ marginBottom: -5, marginTop: 10 }}
      color={props.focused ? colors.accent : colors.text}
    />
  );
}
