import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./../screens/account/login";
import Register from "./../screens/account/register";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import { Provider as PaperProvider, Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import { configureFonts, DefaultTheme } from "react-native-paper";
import MainContainer from "../components/app/containers/main-container";
import Loading from "../components/app/loading";
import { AsyncStorage } from "react-native";
import { UserContext, UserProvider } from "./../constants/user-context";
import Apollo from "../constants/apollo";

import Items from '../screens/items-screen';

const fontConfig = {
  default: {
    regular: {
      fontFamily: "montserrat-regular",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "montserrat-medium",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "montserrat-light",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "pangolin",
      fontWeight: "normal",
    },
  },
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: "hsl(230, 25%, 18%)",
    secondary: "hsl(290, 100%, 80%)",
    accent: "hsl(230, 25%, 18%)",
    background: "#FFF",
    surface: "#FFF",
    text: "hsl(230, 25%, 18%)",
    disabled: "#530908",
    placeholder: "hsl(210, 50%, 60%)",
    text: "hsl(230, 25%, 18%)",
    primary: "hsl(230, 25%, 18%)",
    backdrop: "hsl(210, 50%, 60%)",
  },
};

const Stack = createStackNavigator();

export const Routes = (props) => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const { user } = React.useContext(UserContext);
  console.log({ user });
  React.useEffect(() => {
    checkUserLoggedIn = async () => {
        console.log('checkUserLoggedIn');
      try {
        const value = await AsyncStorage.getItem("user");
        if (value !== null) {
          // We have data!!
          console.log(value);
        }
      } catch (error) {
        // Error retrieving data
        console.log({ error });
        setLoadingComplete(false);
      }
    };
    // AsyncStorage.getItem("user")
    //   .then((user) => {
    //     console.log({ user });
    //   })
    //   .catch((error) => {
    //     console.log({ error });
    //     setLoadingComplete(false);
    //   });
    checkUserLoggedIn();
  }, []);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "montserrat-thin": require("../assets/fonts/Montserrat-Thin.ttf"),
          "montserrat-light": require("../assets/fonts/Montserrat-Light.ttf"),
          "montserrat-regular": require("../assets/fonts/Montserrat-Regular.ttf"),
          "montserrat-medium": require("../assets/fonts/Montserrat-Medium.ttf"),
          se: require("../assets/fonts/Montserrat-Bold.ttf"),
          pangolin: require("../assets/fonts/Pangolin-Regular.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <MainContainer>
        <Loading />
      </MainContainer>
    );
  } else {
    return (
      <UserProvider>
        <Apollo>
          <PaperProvider theme={theme}>
            <NavigationContainer>
              {user.name ? (
                <Text>user exists</Text>
              ) : (
                <Stack.Navigator headerMode="none" initialRouteName="Login">
                  <Stack.Screen name="Login" component={Login} />
                  <Stack.Screen name="Register" component={Register} />
                </Stack.Navigator>
              )}
            </NavigationContainer>
          </PaperProvider>
        </Apollo>
      </UserProvider>
    );
  }
};
