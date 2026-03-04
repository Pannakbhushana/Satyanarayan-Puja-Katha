import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PUJA_CONTENT } from "../../data/pujaVidhiContent";
import { PUJA_SECTIONS } from "../../constants/pujavidhi";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../navigation/RootNavigator";
import { styles } from "./PujaSection.style";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "PujaSection"
>;

export default function PujaSectionScreen({ route, navigation }: Props) {
  const { sectionId, title } = route.params;

  const section = PUJA_CONTENT[sectionId];

  const currentIndex = PUJA_SECTIONS.findIndex(
    (s) => s.id === sectionId
  );

  const prevSection = PUJA_SECTIONS[currentIndex - 1];
  const nextSection = PUJA_SECTIONS[currentIndex + 1];

  if (!section) return null;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Section Title */}
        <Text style={styles.sectionTitle}>{title}</Text>
        <View style={styles.divider} />

        {section.items.map((item, index) => (
          <View key={index} style={styles.block}>
            <Text style={styles.subTitle}>{item.title}</Text>

            <Text style={styles.mantra}>{item.mantra}</Text>

            {item.description && (
              <Text style={styles.description}>
                {item.description}
              </Text>
            )}
          </View>
        ))}

        {/* Navigation Buttons */}
        <View style={styles.navigationContainer}>
          {prevSection && (
            <TouchableOpacity
              style={styles.navButton}
              onPress={() =>
                navigation.replace("PujaSection", {
                  sectionId: prevSection.id,
                  title: prevSection.title,
                })
              }
            >
              <Text style={styles.navText}>← पिछला चरण</Text>
            </TouchableOpacity>
          )}

          {nextSection && (
            <TouchableOpacity
              style={styles.navButton}
              onPress={() =>
                navigation.replace("PujaSection", {
                  sectionId: nextSection.id,
                  title: nextSection.title,
                })
              }
            >
              <Text style={styles.navText}>अगला चरण →</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}