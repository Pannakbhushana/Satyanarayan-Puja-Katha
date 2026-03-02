import React from "react";
import {Text, FlatList, TouchableOpacity, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PUJA_SECTIONS } from "../../constants/pujavidhi";
import {styles} from "./PujaVidhi.styles";

export default function PujaVidhiScreen({ navigation }: any) {
  const { width } = useWindowDimensions();
  const isTablet = width > 768;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>पूजा क्रम</Text>

      <FlatList
        data={PUJA_SECTIONS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={[
          styles.listContainer,
          isTablet && { maxWidth: 700, alignSelf: "center" },
        ]}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.card}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("PujaSection", {
                sectionId: item.id,
                title: item.title,
              })
            }
          >
            <Text style={styles.number}>{index + 1}.</Text>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
