// Tipos e interfaces da aplicação

export interface User {
  id: string;
  name: string;
  email: string;
}

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Nutrition: undefined;
  GenerativeAI: undefined;
  RNFlutterCuriosities: undefined;
  TechMarket: undefined;
};
