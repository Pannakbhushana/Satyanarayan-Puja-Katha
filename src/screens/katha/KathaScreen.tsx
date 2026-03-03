import React from "react";
import {
  Text,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { KATHA_CONTENT, KathaChapterId } from "../../data/kathaContent";
import { RootStackParamList } from "../../navigation/RootNavigator";
import { styles } from "../puja/PujaVidhi.styles";

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Katha"
>;

export default function KathaScreen() {
  const navigation = useNavigation<NavigationProp>();
  const { width } = useWindowDimensions();
  const isTablet = width > 768;

  // Convert object to array for FlatList
  const chapters = Object.entries(KATHA_CONTENT).map(
    ([id, chapter]) => ({
      id: id as KathaChapterId,
      title: chapter.title,
    })
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>कथा अध्याय</Text>

      <FlatList
        data={chapters}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[
          styles.listContainer,
          isTablet && { maxWidth: 700, alignSelf: "center" },
        ]}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("KathaSection", {
                chapterId: item.id,
              })
            }
          >
            <Text style={styles.number}>{index + 1}.</Text>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}