import "react-native-gesture-handler";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./Apps/HomeScreen";
import AboutScreen from "./Apps/AboutScreen";
import Universal from "./Apps/shared/Universal";
import { useColorScheme } from "nativewind";
import { FontAwesome, Entypo , FontAwesome5 , FontAwesome6} from "@expo/vector-icons";
import AllJokesScreen from "./Apps/AllJokesScreen";
import GeneralJokesScreen from "./Apps/GeneralJokesScreen";
import KnockJokesScreen from "./Apps/KnockJokesScreen";
import ProgrammingJokesScreen from "./Apps/ProgrammingJokesScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  const colorScheme = useColorScheme();
  console.log(colorScheme.colorScheme);
  return (
    <NavigationContainer
      theme={colorScheme.colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="All"
          component={AllJokesScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <FontAwesome5 name="laugh-squint" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="General"
          component={GeneralJokesScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <FontAwesome5 name="smile" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Knock-Knock"
          component={KnockJokesScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <FontAwesome5 name="door-open" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Programming"
          component={ProgrammingJokesScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <FontAwesome6 name="computer" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutScreen}
          options={{
            drawerIcon: ({ size, color }) => (
              <Entypo name="info-with-circle" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
