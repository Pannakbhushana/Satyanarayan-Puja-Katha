import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import PujaVidhiScreen from "../screens/puja/PujaVidhiScreen";
import KathaScreen from "../screens/katha/KathaScreen";
import HavanVidhiScreen from "../screens/havan/HavanVidhiScreen";
import AartiScreen from "../screens/aarti/AartiScreen";
import StutiScreen from "../screens/stuti/StutiScreen";
import SamagriScreen from "../screens/samagri/SamagriScreen";
import PujaSectionScreen from "../screens/puja/PujaSectionScreen";
import type { PujaSectionId } from "../data/pujaVidhiContent";

export type RootStackParamList = {
  Home: undefined;
  PujaVidhi: undefined;
  PujaSection: {
    sectionId: PujaSectionId;
    title: string;
    description?: string;
  };
  Katha: undefined;
  HavanVidhi: undefined;
  Aarti: undefined;
  Stuti: undefined;
  Samagri: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "श्री सत्यनारायण पूजा मार्गदर्शिका",
          }}
        />
        <Stack.Screen
          name="PujaVidhi"
          component={PujaVidhiScreen}
          options={{ title: "पूजा विधि" }}
        />

        <Stack.Screen
          name="Katha"
          component={KathaScreen}
          options={{ title: "कथा" }}
        />

        <Stack.Screen
          name="HavanVidhi"
          component={HavanVidhiScreen}
          options={{ title: "हवन विधि" }}
        />

        <Stack.Screen
          name="Aarti"
          component={AartiScreen}
          options={{ title: "आरती" }}
        />

        <Stack.Screen
          name="Stuti"
          component={StutiScreen}
          options={{ title: "स्तुति" }}
        />

        <Stack.Screen
          name="Samagri"
          component={SamagriScreen}
          options={{ title: "सामग्री सूची" }}
        />
        <Stack.Screen
          name="PujaSection"
          component={PujaSectionScreen}
          options={({ route }) => ({
            title: route.params?.title ?? "पूजा चरण",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}