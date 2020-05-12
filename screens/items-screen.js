import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { gql, useQuery } from "@apollo/client";
import MainContainer from "../components/app/containers/main-container";

import Center from "../components/app/containers/center";
import Loading from "../components/app/loading";
import Card from "../components/app/containers/card";

const GET_ITEMS = gql`
  query GetItems {
    allItems {
      data {
        _id
        name
        location
        description
        swapped
        date
        photo
        contactByPhone
        contactByEmail
        owner {
          name
          email
          phone
        }
      }
    }
  }
`;

export default function ItemsScreen() {
  const { loading, error, data } = useQuery(GET_ITEMS);
  console.log({ data });

  if (loading) {
    return (
      <MainContainer>
        <Center>
          <Loading />
        </Center>
      </MainContainer>
    );
  }
  return (
    <MainContainer>
      <FlatList
        data={data.allItems.data}
        renderItem={({ item }) => <Card key={item._id} {...item} />}
        keyExtractor={(item) => item._id}
      />
    </MainContainer>
  );
}

ItemsScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center",
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)",
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
