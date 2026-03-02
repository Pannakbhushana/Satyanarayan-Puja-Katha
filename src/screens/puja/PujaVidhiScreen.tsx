import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const PUJA_SECTIONS = [
  { id: "sudhikaran", title: "शुद्धिकरण" },
  { id: "sankalp", title: "संकल्प" },
  { id: "swastivachan", title: "स्वस्तिवाचन" },
  { id: "gauriGanesh", title: "गौरी गणेश" },
  { id: "kalash", title: "कलश" },
  { id: "panchdevta", title: "पंचदेवता" },
  { id: "navgrah", title: "नवग्रह" },
  { id: "satyanarayan", title: "सत्यानारायण" },
];

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8E1",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#3E2723",
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 16,
    marginBottom: 14,
    elevation: 4,
  },
  number: {
    fontSize: 18,
    fontWeight: "600",
    marginRight: 12,
    color: "#F57C00",
  },
  title: {
    fontSize: 18,
    color: "#3E2723",
    fontWeight: "500",
  },
});