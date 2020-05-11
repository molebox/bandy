import * as React from "react";
import { Text } from "react-native";

export function textLight(props) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        { fontFamily: "montserrat-light", letterSpacing: 2 },
      ]}
    />
  );
}
