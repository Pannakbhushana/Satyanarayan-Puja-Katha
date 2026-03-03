import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { WHEN_TO_PERFORM_CONTENT } from "../../data/whenToPerformContent";
import { styles } from "../puja/PujaSection.style";

export default function WhenToPerformScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>
          कब करें सत्यनारायण पूजा
        </Text>
        <View style={styles.divider} />

        {WHEN_TO_PERFORM_CONTENT.map((item, index) => (
          <View key={index} style={styles.block}>
            <Text style={styles.subTitle}>{item.title}</Text>

            <Text style={styles.kathaText}>
              {item.content}
            </Text>
          </View>
        ))}

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}