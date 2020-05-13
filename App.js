import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import * as React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import Apollo from "./constants/apollo";
import MainContainer from "./components/app/containers/main-container";

const Stack = createStackNavigator();

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
      fontFamily: "montserrat-thin",
      fontWeight: "normal",
    },
  },
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: "hsl(260, 100%, 80%)",
    secondary: "hsl(290, 100%, 80%)",
    accent: "#F3A19B",
    background: "hsl(230, 25%, 18%)",
    surface: "#FFF",
    text: "hsl(210, 50%, 96%)",
    disabled: "#530908",
    placeholder: "hsl(210, 50%, 60%)",
    backdrop: "hsl(210, 50%, 60%)",
  },
};

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
          "montserrat-thin": require("./assets/fonts/Montserrat-Thin.ttf"),
          "montserrat-light": require("./assets/fonts/Montserrat-Light.ttf"),
          "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
          "montserrat-medium": require("./assets/fonts/Montserrat-Medium.ttf"),
          "montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
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
    return null;
  } else {
    return (
      <Apollo>
        <PaperProvider theme={theme}>
          <MainContainer>
            {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
            <NavigationContainer linking={LinkingConfiguration}>
              <Stack.Navigator headerMode="none">
                <Stack.Screen name="Root" component={BottomTabNavigator} />
              </Stack.Navigator>
            </NavigationContainer>
          </MainContainer>
        </PaperProvider>
      </Apollo>
    );
  }
}
