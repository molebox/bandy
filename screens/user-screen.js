import * as React from "react";
import { View, FlatList, Text } from "react-native";

import { gql, useQuery } from "@apollo/client";
import MainContainer from "../components/app/containers/main-container";

import Center from "../components/app/containers/center";
import Loading from "../components/app/loading";
import Card from "../components/app/containers/card";
import { useTheme } from "react-native-paper";

export default function UserScreen() {
  const { colors } = useTheme();
  return (
    <MainContainer>
      <View
        style={{
          marginTop: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "montserrat-regular",
            fontSize: 40,
            color: colors.primary,
          }}
        >
          My Profile
        </Text>
      </View>
    </MainContainer>
  );
}

UserScreen.navigationOptions = {
  header: null,
};
