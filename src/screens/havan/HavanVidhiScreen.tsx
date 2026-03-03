import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { HAVAN_CONTENT } from "../../data/havanContent";
import { styles } from "../puja/PujaSection.style"; // reusing same style

export default function HavanVidhiScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Page Title */}
        <Text style={styles.sectionTitle}>हवन विधि</Text>
        <View style={styles.divider} />

        {HAVAN_CONTENT.steps.map((step, index) => (
          <View key={index} style={styles.block}>
            <Text style={styles.subTitle}>{step.title}</Text>

            <Text style={styles.mantra}>
              {step.mantra}
            </Text>

            {step.description && (
              <Text style={styles.description}>
                {step.description}
              </Text>
            )}
          </View>
        ))}

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}