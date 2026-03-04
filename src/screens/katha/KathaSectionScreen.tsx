import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { KATHA_CONTENT } from "../../data/kathaContent";

import type { RootStackParamList } from "../../navigation/RootNavigator";
import { styles } from "../puja/PujaSection.style";
import { KATHA_SECTIONS } from "../../constants/katha";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "KathaSection"
>;

export default function KathaSectionScreen({ route, navigation }: Props) {
  const { chapterId } = route.params;

  const chapter = KATHA_CONTENT[chapterId];

  const currentIndex = KATHA_SECTIONS.findIndex(
    (c) => c.id === chapterId
  );

  const prevChapter = KATHA_SECTIONS[currentIndex - 1];
  const nextChapter = KATHA_SECTIONS[currentIndex + 1];

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

        {/* Chapter Content */}
        <Text style={styles.kathaText}>
          {chapter.content}
        </Text>

        {/* Navigation Buttons */}
        <View style={styles.navigationContainer}>
          {prevChapter && (
            <TouchableOpacity
              style={styles.navButton}
              onPress={() =>
                navigation.replace("KathaSection", {
                  chapterId: prevChapter.id,
                })
              }
            >
              <Text style={styles.navText}>← पिछला अध्याय</Text>
            </TouchableOpacity>
          )}

          {nextChapter && (
            <TouchableOpacity
              style={styles.navButton}
              onPress={() =>
                navigation.replace("KathaSection", {
                  chapterId: nextChapter.id,
                })
              }
            >
              <Text style={styles.navText}>अगला अध्याय →</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}