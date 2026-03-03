import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AARTI_CONTENT } from "../../data/aartiContent";
import { styles } from "../puja/PujaSection.style";

export default function AartiScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>
          {AARTI_CONTENT.title}
        </Text>
        <View style={styles.divider} />

        <Text style={styles.kathaText}>
          {AARTI_CONTENT.content}
        </Text>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}