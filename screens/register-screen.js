import * as React from "react";
import { View, Image, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import { Button, useTheme, Snackbar, List } from "react-native-paper";
import { UserContext } from "./../constants/user-context";
import RegularText from "../components/common/regular-text";
import { useAllLocations } from "./../constants/fauna";
import Loading from "../components/app/loading";

const Register = () => {
  const { colors } = useTheme();
  const user = React.useContext(UserContext);
  const [userName, setUserName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [userLocation, setUserLocation] = React.useState("");
  const [userPhone, setUserPhone] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [snack, setSnack] = React.useState(false);
  const [locationExpanded, setLocationExpanded] = React.useState(false);
  const { loading, error: locationError, locationData } = useAllLocations();
  console.log({ locationData });

  const handleLocationDropdown = () => setLocationExpanded(!locationExpanded);

  const getLocation = (location) => {
    console.log({ location });
    setUserLocation(location);
    setLocationExpanded(false);
  };

  const dismissSnack = () => setSnack(false);

  const register = () => {
    const registerUser = fetch(
      `https://bandy-api.molebox.now.sh/api/register`,
      {
        method: "POST",
        body: JSON.stringify({
          email: userEmail,
          password: userPassword,
          name: userName,
          location: userLocation._id,
          phone: userPhone,
        }),
      }
    )
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        return error;
      });

    registerUser
      .then((newUser) => {
        user.setName(newUser.name);
        user.setLocation(newUser.location);
        user.setPhone(newUser.phone);
        setSnack(true);
      })
      .catch((error) => {
        setError(error.message);
        setSnack(true);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        style={{ width: 200, height: 200, marginBottom: 30 }}
        source={require("../assets/images/register.png")}
      />
      <RegularText>Your data is secure and never shared</RegularText>
      <View style={{ width: 300 }}>
        <ScrollView>
          <List.Section>
            <List.Accordion
              title={
                userLocation.location ? userLocation.location : "Välj Plats"
              }
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
              {!loading &&
                !locationError &&
                locationData.allLocations.data.map((location) => (
                  <List.Item
                    onPress={() => getLocation(location)}
                    key={location._id}
                    title={location.location}
                  />
                ))}
            </List.Accordion>
          </List.Section>
        </ScrollView>

        <TextInput
          mode="outlined"
          value={userName}
          selectionColor={colors.text}
          dense
          underlineColor={colors.accent}
          onChangeText={(name) => setUserName(name)}
          label="Name"
          autoCapitalize="none"
          style={{}}
        />
        {/* <TextInput
          mode="outlined"
          value={userLocation}
          selectionColor={colors.text}
          dense
          underlineColor={colors.accent}
          onChangeText={(location) => setUserLocation(location)}
          label="Location"
          autoCapitalize="none"
        /> */}
        <TextInput
          mode="outlined"
          value={userEmail}
          selectionColor={colors.text}
          dense
          underlineColor={colors.accent}
          onChangeText={(email) => setUserEmail(email)}
          label="Email"
          autoCapitalize="none"
        />
        <TextInput
          mode="outlined"
          value={userPhone}
          selectionColor={colors.text}
          dense
          underlineColor={colors.accent}
          onChangeText={(phone) => setUserPhone(phone)}
          label="Phone"
          autoCapitalize="none"
        />
        <TextInput
          mode="outlined"
          label="Password"
          selectionColor={colors.text}
          value={userPassword}
          dense
          underlineColor={colors.accent}
          onChangeText={(password) => setUserPassword(password)}
          secureTextEntry={true}
        />
        <Button
          style={{ width: 300, alignSelf: "center", marginVertical: 20 }}
          mode="contained"
          onPress={register}
        >
          Register
        </Button>
        <Snackbar visible={snack} onDismiss={dismissSnack}>
          {error ? error : "Yay! You have created an account with Bandy!"}
        </Snackbar>
      </View>
    </View>
  );
};

export default Register;

Register.navigationOptions = {
  header: null,
};
