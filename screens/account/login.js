import * as React from "react";
import { View, Image } from "react-native";
import {
  Button,
  useTheme,
  Text,
  TextInput,
  Subheading,
} from "react-native-paper";
import MainContainer from "./../../components/app/containers/main-container";
import { UserContext } from "./../../constants/user-context";

const Login = ({ navigation }) => {
  const { colors } = useTheme();
  const { login, setUser } = React.useContext(UserContext);
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [loginError, setLoginError] = React.useState(null);

  const callLogin = () => {
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
        setUser({ faunsSecret: user });
        console.log({ user });
        // login();
      })
      .catch((error) => setLoginError(error));
  };

  return (
    <MainContainer>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ width: 150, height: 150, marginBottom: 30 }}
          source={require("../../assets/images/intro.png")}
        />
        <Text
          style={{
            fontFamily: "montserrat-regular",
            fontSize: 40,
            color: colors.primary,
          }}
        >
          Bandy
        </Text>
        <Subheading style={{ marginVertical: 20 }}>
          Sell or trade, always 100% secure
        </Subheading>
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
            onPress={callLogin}
          >
            Login
          </Button>

          {loginError ? (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 10, color: colors.accent }}>
                {loginError.message}
              </Text>
            </View>
          ) : null}
        </View>
        <Button
          style={{ fontSize: 20 }}
          mode="text"
          onPress={() => navigation.navigate("Register")}
        >
          No account? Register
        </Button>
      </View>
    </MainContainer>
  );
};

export default Login;
