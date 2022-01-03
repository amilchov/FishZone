// Import React
import React from "react";

// Import Navigators from React Navigation
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Import Screens
import HomeScreen from "./DrawerScreens/HomeScreen";
import SettingsScreen from "./DrawerScreens/SettingsScreen";
import PageOne from "./DrawerScreens/PageOne";
import PageTwo from "./DrawerScreens/PageTwo";

// import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from "./Components/NavigationDrawerHeader";

import PageToDo from "./Components/PageToDo";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Начало", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#307ecc", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const settingScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#307ecc", //Set Header color
        },
        headerTintColor: "#fff", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: "Настройки", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const pageOneStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="PageOne">
      <Stack.Screen
        name="PageOne"
        component={PageOne}
        options={{
          title: "Язовири", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#307ecc", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const pageTwoStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="PageTwo">
      <Stack.Screen
        name="PageTwo"
        component={PageTwo}
        options={{
          title: "Риби", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#307ecc", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const pageToDoStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="PageToDo">
      <Stack.Screen
        name="PageToDo"
        component={PageToDo}
        options={{
          title: "ToDo", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#307ecc", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: "#cee1f2",
        color: "#cee1f2",
        itemStyle: { marginVertical: 5, color: "white" },
        labelStyle: {
          color: "#d8d8d8",
        },
      }}
      screenOptions={{ headerShown: false }}
      //   drawerContent={CustomSidebarMenu}
    >
      <Drawer.Screen
        name="homeScreenStack"
        options={{ drawerLabel: "Начало" }}
        component={homeScreenStack}
      />
      <Drawer.Screen
        name="settingScreenStack"
        options={{ drawerLabel: "Настройки" }}
        component={settingScreenStack}
      />
      <Drawer.Screen
        name="pageOneStack"
        options={{ drawerLabel: "Язовири" }}
        component={pageOneStack}
      />
      <Drawer.Screen
        name="pageTwoStack"
        options={{ drawerLabel: "Риби" }}
        component={pageTwoStack}
      />
      <Drawer.Screen
        name="pageToDoStack"
        options={{ drawerLabel: "ToDo" }}
        component={pageToDoStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
