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
import { Searchbar } from "react-native-paper";

import { gql, useQuery } from "@apollo/client";
import MainContainer from "../components/app/containers/main-container";
import Loading from "../components/app/loading";
import Center from "../components/app/containers/center";
import Logo from "./../components/app/logo";
import Card from "./../components/app/containers/card";
import { useSearchBar } from "./../components/app/useSearchBar";
import SearchBar from "./../components/app/searchbar";

// const GET_USERS = gql`
//   query GetUsers {
//     allUsers {
//       data {
//         name
//         location
//         _id
//       }
//     }
//   }
// `;

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

export default function HomeScreen() {
  const { loading, error, data } = useQuery(GET_ITEMS);
  const { items, handleSearchQuery, searchQuery } = useSearchBar(data);

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
      <View style={{ marginTop: 50 }}>
        <View
          style={{
            alignItems: "center",
            padding: 5,
            marginBottom: 10,
            marginRight: 10,
            marginLeft: 10,
          }}
        >
          <SearchBar
            handleSearchQuery={handleSearchQuery}
            searchQuery={searchQuery}
          />
        </View>
        <FlatList
          data={items.length ? items : data.allItems.data}
          renderItem={({ item }) => <Card key={item._id} {...item} />}
          keyExtractor={(item) => item._id}
        />
      </View>
    </MainContainer>
  );
}

HomeScreen.navigationOptions = {
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
