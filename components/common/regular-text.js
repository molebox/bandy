import * as React from "react";
import { Text } from "react-native-paper";

const RegularText = (props) => {
  const { children, color, size } = props;

  return (
    <Text
      {...props}
      style={
        ([props.style],
        { fontFamily: "montserrat-regular", color, fontSize: size })
      }
    >
      {children}
    </Text>
  );
};

export default RegularText;
