import * as React from "react";
import { Text } from "react-native";

export function TextBold(props) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: "montserrat-bold", letterSpacing: 2 }]}
    />
  );
}
