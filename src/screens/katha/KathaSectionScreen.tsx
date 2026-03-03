import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { KATHA_CONTENT } from "../../data/kathaContent";
import type { RootStackParamList } from "../../navigation/RootNavigator";
import { styles } from "../puja/PujaSection.style";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "KathaSection"
>;

export default function KathaSectionScreen({ route }: Props) {
  const { chapterId } = route.params;

  const chapter = KATHA_CONTENT[chapterId];

  if (!chapter) return null;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Chapter Title */}
        <Text style={styles.sectionTitle}>{chapter.title}</Text>
        <View style={styles.divider} />

        {/* Full Chapter Content */}
        <Text style={styles.kathaText}>
          {chapter.content}
        </Text>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}