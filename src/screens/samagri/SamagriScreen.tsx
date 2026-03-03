import React from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { SAMAGRI_CONTENT } from "../../data/samagriContent";
import { styles } from "../puja/PujaSection.style";

export default function SamagriScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={SAMAGRI_CONTENT}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <Text style={styles.sectionTitle}>पूजा सामग्री</Text>
            <View style={styles.divider} />
          </>
        }
        renderItem={({ item, index }) => (
          <View style={styles.block}>
            <Text style={styles.subTitle}>
              {index + 1}. {item.name}
            </Text>

            {item.note && (
              <Text style={styles.description}>
                {item.note}
              </Text>
            )}
          </View>
        )}
        ListFooterComponent={<View style={{ height: 40 }} />}
      />
    </SafeAreaView>
  );
}