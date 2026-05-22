// Configuração de navegação

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/Home";
import { LoginScreen } from "../screens/Login";
import { NutritionScreen } from "../screens/Nutrition";
import { GenerativeAIScreen } from "../screens/GenerativeAI";
import { RNFlutterCuriositiesScreen } from "../screens/RNFlutterCuriosities";
import { TechMarketScreen } from "../screens/TechMarket";
import { RootStackParamList } from "../types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Nutrition" component={NutritionScreen} />
        <Stack.Screen name="GenerativeAI" component={GenerativeAIScreen} />
        <Stack.Screen
          name="RNFlutterCuriosities"
          component={RNFlutterCuriositiesScreen}
        />
        <Stack.Screen name="TechMarket" component={TechMarketScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
