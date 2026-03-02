import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PUJA_CONTENT } from "../../data/pujaVidhiContent";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../navigation/RootNavigator";
import {styles} from "./PujaSection.style";

type Props = NativeStackScreenProps<
  RootStackParamList,
  "PujaSection"
>;

export default function PujaSectionScreen({ route }: Props) {
  const { sectionId, title } = route.params;

  const section = PUJA_CONTENT[sectionId];

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
            {/* Subsection Title */}
            <Text style={styles.subTitle}>{item.title}</Text>

            {/* Mantra */}
            <Text style={styles.mantra}>{item.mantra}</Text>

            {/* Optional Instruction */}
            {item.description && (
              <Text style={styles.description}>
                {item.description}
              </Text>
            )}
          </View>
        ))}

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}