import React from "react";
import { Text, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { STUTI_CONTENT } from "../../data/stutiContent";
import { styles } from "../puja/PujaSection.style";

export default function StutiScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>
          {STUTI_CONTENT.title}
        </Text>
        <View style={styles.divider} />

        <Text
          style={[
            styles.kathaText,
            { textAlign: "center" } // stuti feels better centered
          ]}
        >
          {STUTI_CONTENT.content}
        </Text>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}