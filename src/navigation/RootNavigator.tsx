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
import KathaSectionScreen from "../screens/katha/KathaSectionScreen";
import type { KathaChapterId } from "../data/kathaContent";
import VisarjanScreen from "../screens/visarjan/VisarjanScreen";
import WhenToPerformScreen from "../screens/when-to-perform/WhenToPerformScreen";

export type RootStackParamList = {
  Home: undefined;
  PujaVidhi: undefined;
  PujaSection: {
    sectionId: PujaSectionId;
    title: string;
    description?: string;
  };
  Katha: undefined;
  KathaSection: {
    chapterId: KathaChapterId;
  };
  HavanVidhi: undefined;
  Aarti: undefined;
  Stuti: undefined;
  Samagri: undefined;
  Visarjan: undefined;
  WhenToPerform:undefined
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
          options={{ title: "सत्यनारायण कथा" }}
        />

        <Stack.Screen
          name="KathaSection"
          component={KathaSectionScreen}
          options={{ title: "सत्यनारायण कथा" }}
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
          name="Visarjan"
          component={VisarjanScreen}
          options={{ title: "पूर्णता एवं विसर्जन" }}
        />
        <Stack.Screen
          name="WhenToPerform"
          component={WhenToPerformScreen}
          options={{ title: "कब करें पूजा?" }}
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