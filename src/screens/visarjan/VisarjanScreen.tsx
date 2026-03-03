import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { VISARJAN_CONTENT } from "../../data/visarjanContent";
import { styles } from "../puja/PujaSection.style";

export default function VisarjanScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>विसर्जन</Text>
        <View style={styles.divider} />

        {VISARJAN_CONTENT.steps.map((step, index) => (
          <View key={index} style={styles.block}>
            <Text style={styles.subTitle}>{step.title}</Text>

            <Text style={styles.mantra}>
              {step.mantra}
            </Text>
          </View>
        ))}

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}