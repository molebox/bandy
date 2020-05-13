import * as React from "react";
import { View, FlatList, Text } from "react-native";

import { gql, useQuery } from "@apollo/client";
import MainContainer from "../components/app/containers/main-container";

import Center from "../components/app/containers/center";
import Loading from "../components/app/loading";
import Card from "../components/app/containers/card";

export default function ItemsScreen() {
  return (
    <MainContainer>
      <View style={{ marginTop: 50 }}>
        <Text>My Items Page</Text>
      </View>
    </MainContainer>
  );
}

ItemsScreen.navigationOptions = {
  header: null,
};
