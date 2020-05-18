import * as React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { Button, useTheme } from "react-native-paper";
import { gql, useQuery } from "@apollo/client";

const Login = () => {
  const { colors } = useTheme();
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const login = () => {
    const loginUser = fetch(`https://bandy-api.molebox.now.sh/api/login`, {
      method: "POST",
      body: JSON.stringify({ email: userEmail, password: userPassword }),
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        return error;
      });

    loginUser
      .then((user) => {
        setIsLoggedIn(true);
      })
      .catch((error) => setIsLoggedIn(false));
  };

  return (
    <View style={{ width: 300 }}>
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
        onPress={login}
      >
        Login
      </Button>

      {isLoggedIn ? (
        <Text style={{ fontSize: 20, color: colors.accent }}>
          HORRAY! YOU ARE LOGGED IN
        </Text>
      ) : null}
    </View>
  );
};

export default Login;
