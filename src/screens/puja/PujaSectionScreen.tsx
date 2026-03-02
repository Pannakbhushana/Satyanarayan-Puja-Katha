import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PUJA_CONTENT } from "../../data/pujaVidhiContent";

export default function PujaSectionScreen({ route }: any) {
  const { sectionId, title } = route.params;

  const section  = PUJA_CONTENT[sectionId];

  if (!section) return null;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Main Title */}
        <Text style={styles.sectionTitle}>{title}</Text>

        {/* Divider */}
        <View style={styles.divider} />

        {section.items.map((item: any, index: number) => (
          <View key={index} style={styles.block}>
            {/* Subsection Title */}
            <Text style={styles.subTitle}>{item.title}</Text>

            {/* Mantras */}
            {item.mantras.map((mantra: string, i: number) => (
              <Text key={i} style={styles.mantra}>
                {mantra}
              </Text>
            ))}
          </View>
        ))}

        {/* Bottom spacing */}
        <View style={{ height: 30 }} />
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
    marginBottom: 28,
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 14,
    elevation: 3,
  },

  subTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: "#3E2723",
  },

  mantra: {
    fontSize: 17,
    lineHeight: 28,
    color: "#F57C00",
    marginBottom: 8,
  },
});