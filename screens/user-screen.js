import * as React from "react";
import { View, FlatList, Image } from "react-native";

import { gql, useQuery } from "@apollo/client";
import MainContainer from "../components/app/containers/main-container";

import Center from "../components/app/containers/center";
import Loading from "../components/app/loading";
import Card from "../components/app/containers/card";
import { useTheme, Button } from "react-native-paper";
import RegularText from "./../components/common/regular-text";

export default function UserScreen() {
  const { colors } = useTheme();
  const [userDetails, setUserDetails] = React.useState({
    name: "",
    location: "",
    email: "",
    phone: "",
  });

  const hasDataCheck = () => {
    for (var key in userDetails) {
      if (userDetails[key] !== null && userDetails[key] != "") return false;
    }
    return true;
  };

  const noData = () => (
    <View
      style={{
        flex: 1,
        marginTop: 30,
      }}
    >
      <RegularText>
        Looks like you just registered. Hit edit and add your info
      </RegularText>
    </View>
  );

  const hasData = () => (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        marginTop: 30,
      }}
    >
      <RegularText size={20}>
        Name: {userDetails.name ? userDetails.name : null}{" "}
      </RegularText>
      <RegularText size={20}>
        Location: {userDetails.location ? userDetails.location : null}
      </RegularText>
      <RegularText size={20}>
        Email: {userDetails.email ? userDetails.email : null}
      </RegularText>
      <RegularText size={20}>
        Phone: {userDetails.phone ? userDetails.phone : null}
      </RegularText>
    </View>
  );

  const data = hasDataCheck() ? hasData : noData;

  return (
    <MainContainer>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 50,
        }}
      >
        <View
          style={{
            marginTop: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 200, height: 200 }}
            source={require("../assets/images/profile.png")}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "space-evenly",
            marginTop: 30,
          }}
        >
          {data}
          <RegularText size={20}>
            Name: {userDetails.name ? userDetails.name : null}{" "}
          </RegularText>
          <RegularText size={20}>
            Location: {userDetails.location ? userDetails.location : null}
          </RegularText>
          <RegularText size={20}>
            Email: {userDetails.email ? userDetails.email : null}
          </RegularText>
          <RegularText size={20}>
            Phone: {userDetails.phone ? userDetails.phone : null}
          </RegularText>
        </View>
        <Button style={{ marginVertical: 50 }} mode="contained">
          Edit
        </Button>
      </View>
    </MainContainer>
  );
}

UserScreen.navigationOptions = {
  header: null,
};
