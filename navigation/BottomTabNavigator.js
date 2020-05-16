import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/home-screen";
import LinksScreen from "../screens/LinksScreen";
import ItemsScreen from "../screens/items-screen";
import { useTheme } from "react-native-paper";
import UserScreen from "./../screens/user-screen";
import CreateItemScreen from "./../screens/create-item-screen";
import IntroScreen from "./../screens/intro-screen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  const { colors } = useTheme();

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Intro"
        component={IntroScreen}
        options={{
          title: "",
          color: colors.text,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="login" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "",
          color: colors.text,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="home" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Items"
        component={ItemsScreen}
        options={{
          title: "",
          color: colors.text,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="folder1" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Create Item"
        component={CreateItemScreen}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="bulb1" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={UserScreen}
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="user" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Intro":
      return "Bandy";
    case "Home":
      return "Toy Feed";
    case "Items":
      return "My Items";
    case "Links":
      return "Links to learn more";
  }
}
