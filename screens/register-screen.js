import * as React from "react";
import { View, Image, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { Button, useTheme, Snackbar, List } from "react-native-paper";
import { UserContext } from "./../constants/user-context";
import RegularText from "../components/common/regular-text";
import { useAllLocations } from "./../constants/fauna";
import Loading from "../components/app/loading";
import RNPickerSelect from "react-native-picker-select";
import MainContainer from "./../components/app/containers/main-container";
import RegularText from "./../components/common/regular-text";

const Register = ({ navigation }) => {
  const { colors } = useTheme();
  const { setUser } = React.useContext(UserContext);
  const [userName, setUserName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [userLocation, setUserLocation] = React.useState("");
  const [userPhone, setUserPhone] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [snack, setSnack] = React.useState(false);
  const { loading, error: locationError, locationData } = useAllLocations();
  const [locations, setLocations] = React.useState([
    { label: "test", value: "test", key: "test1" },
  ]);

  React.useEffect(() => {
    const locationsArray = loading
      ? []
      : locationData.allLocations.data.map((location) => ({
          label: location.location,
          value: location._id,
          key: location._id,
          color: colors.accent,
          displayValue: true,
        }));

    setLocations(locationsArray);
  }, [loading]);

  const getLocation = (location) => {
    setUserLocation(location);
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
          location: userLocation,
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
      .then((result) => {
        console.log(JSON.stringify(newUser));
        const newUser = JSON.stringify(result);
        setUser;
        user.setName(newUser.createUser.name);
        user.setEmail(newUser.createUser.email);
        user.setPhone(newUser.createUser.phone);
        // user.setLocation(newUser.name);
        navigation.navigate("ItemsFeed");

        setSnack(true);
      })
      .catch((error) => {
        setError(error.message);
        setSnack(true);
      });
  };

  if (locationError) {
    return (
      <MainContainer>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RegularText text={location.error} />
        </View>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      {loading ? (
        <Loading />
      ) : (
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
            <RNPickerSelect
              placeholder={{ label: "Välj Plats" }}
              onValueChange={(value) => getLocation(value)}
              items={locations}
              style={pickerSelectStyles}
            />

            <TextInput
              mode="outlined"
              value={userName}
              selectionColor={colors.text}
              dense
              underlineColor={colors.accent}
              onChangeText={(name) => setUserName(name)}
              label="Name"
              autoCapitalize="none"
              style={{ marginVertical: 5 }}
            />
            <TextInput
              mode="outlined"
              value={userEmail}
              selectionColor={colors.text}
              dense
              underlineColor={colors.accent}
              onChangeText={(email) => setUserEmail(email)}
              label="Email"
              autoCapitalize="none"
              style={{ marginVertical: 5 }}
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
              style={{ marginVertical: 5 }}
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
              style={{ marginVertical: 5 }}
            />
            <Button
              style={{ width: 300, alignSelf: "center", marginVertical: 20 }}
              mode="contained"
              onPress={register}
            >
              Register
            </Button>
          </View>
        </View>
      )}
      <Button
        style={{ fontSize: 20 }}
        mode="text"
        onPress={() => navigation.goBack()}
      >
        Back to login
      </Button>
      <Snackbar
        style={{ alignItems: "center", justifyContent: "center" }}
        visible={snack}
        onDismiss={dismissSnack}
      >
        {error ? error : "Yay! You have created an account with Bandy!"}
      </Snackbar>
    </MainContainer>
  );
};

export default Register;

Register.navigationOptions = {
  header: null,
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    marginVertical: 5,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "hsl(230, 25%, 18%)",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    marginVertical: 5,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "hsl(230, 25%, 18%)",
    borderRadius: 8,
    color: "hsl(230, 25%, 18%)",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
