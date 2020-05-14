import * as React from "react";
import { View, FlatList } from "react-native";
import { List, useTheme, Text, FAB, Subheading } from "react-native-paper";

import { gql, useQuery } from "@apollo/client";
import MainContainer from "../components/app/containers/main-container";
import Loading from "../components/app/loading";
import Center from "../components/app/containers/center";
import Card from "./../components/app/containers/card";
import { useSearchBar } from "./../components/app/useSearchBar";
import SearchBar from "./../components/app/searchbar";
import { ScrollView } from "react-native-gesture-handler";

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
  const [locationExpanded, setLocationExpanded] = React.useState(false);
  const { colors, fonts } = useTheme();
  let scroll;

  const handleLocationDropdown = () => setLocationExpanded(!locationExpanded);

  const header = () => (
    <>
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
          Bandy
        </Text>
        <Subheading
          style={{ fontFamily: "montserrat-regular", color: colors.primary }}
        >
          Snazzy tagline here
        </Subheading>
      </View>
      <View>
        <List.Section>
          <List.Accordion
            title="Hela Sverige"
            titleStyle={{ color: colors.primary }}
            left={(props) => (
              <List.Icon
                {...props}
                color={colors.primary}
                icon="crosshairs-gps"
              />
            )}
            expanded={locationExpanded}
            onPress={handleLocationDropdown}
          >
            <List.Item title="Västernorrlands län" />
            <List.Item title="Stockholms län" />
            <List.Item title="Värmlands län" />
            <List.Item title="Västerbottens län" />
          </List.Accordion>
        </List.Section>
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
            searchQuery={searchQuery.query}
          />
        </View>
      </View>
    </>
  );

  const scrollToTop = () => {
    scroll.scrollTo({ x: 0, y: 0, animated: true });
  };

  if (loading && data === undefined) {
    return (
      <MainContainer>
        <Center>
          <Loading />
        </Center>
      </MainContainer>
    );
  }
  return (
    <>
      <ScrollView
        ref={(c) => {
          scroll = c;
        }}
      >
        <MainContainer>
          <FlatList
            // data={data.allItems.data}
            data={items.length ? items : data.allItems.data}
            renderItem={({ item }) => <Card key={item._id} {...item} />}
            keyExtractor={(item) => item._id}
            ListHeaderComponent={header}
          />
        </MainContainer>
      </ScrollView>
      <FAB
        icon="arrow-expand-up"
        color={colors.background}
        onPress={scrollToTop}
        style={{
          position: "absolute",
          margin: 15,
          right: 0,
          bottom: 0,
          backgroundColor: colors.placeholder,
        }}
      />
    </>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
