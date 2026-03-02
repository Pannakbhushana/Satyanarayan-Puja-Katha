import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PUJA_CONTENT } from "../../data/pujaVidhiContent";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../navigation/RootNavigator";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8E1",
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#3E2723",
  },

  divider: {
    height: 2,
    width: 60,
    backgroundColor: "#F57C00",
    alignSelf: "center",
    marginBottom: 25,
    borderRadius: 2,
  },

  block: {
    marginBottom: 30,
  },

  subTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#3E2723",
  },

  mantra: {
    fontSize: 18,
    lineHeight: 30,
    color: "#F57C00",
    textAlign: "left",
    marginBottom: 6,
  },

  description: {
    fontSize: 14,
    lineHeight: 22,
    color: "#5D4037",
  },
});