import * as React from "react";
import { View, Text, Image } from "react-native";
import MainContainer from "../components/app/containers/main-container";
import { useTheme } from "react-native-paper";
import { Subheading, Button } from "react-native-paper";
import Login from "./account/login";

export default function IntroScreen({ navigation }) {
  const { colors } = useTheme();

  return (
    <MainContainer>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ width: 200, height: 200, marginBottom: 30 }}
          source={require("../assets/images/intro.png")}
        />
        <Text
          style={{
            fontFamily: "montserrat-regular",
            fontSize: 40,
            color: colors.primary,
          }}
        >
          Bandy
        </Text>
        <Subheading style={{ marginVertical: 20 }}>
          Sell or trade, always 100% secure
        </Subheading>
        <Login />
        <Button
          style={{ fontSize: 20 }}
          mode="text"
          onPress={() => navigation.navigate("Register")}
        >
          No account? Register
        </Button>
      </View>
    </MainContainer>
  );
}

IntroScreen.navigationOptions = {
  header: null,
};
