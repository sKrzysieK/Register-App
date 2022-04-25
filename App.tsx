//* Imports
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//* Components
import Register from "./pages/Register";
import Users from "./pages/Users";
import Detail from "./pages/Detail";


//* Stack Navigator
const Stack = createNativeStackNavigator();

//* App
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="register page" component={Register} />
        <Stack.Screen name="users" component={Users} />
        <Stack.Screen name="detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
