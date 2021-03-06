import * as React from "react";
import { ScrollView, View, FlatList } from "react-native";

import { gql, useQuery } from "@apollo/client";
import MainContainer from "../components/app/containers/main-container";
import { Text, useTheme } from "react-native-paper";

export default function ItemsScreen() {
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
          My Items
        </Text>
      </View>
    </MainContainer>
  );
}

ItemsScreen.navigationOptions = {
  header: null,
};
