import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MENU_ITEMS = [
  { id: "1", title: "Puja Vidhi" },
  { id: "2", title: "Katha" },
  { id: "3", title: "Aarti" },
  { id: "4", title: "Havan Vidhi" },
  { id: "5", title: "Samagri List" },
  { id: "6", title: "When to Perform" },
];

export default function HomeScreen() {
  const { width } = useWindowDimensions();

  // Responsive column logic
  let numColumns = 2;
  if (width >= 600) numColumns = 3;       // Tablet
  if (width >= 900) numColumns = 4;       // Large tablet / TV

  const cardSize = width / numColumns - 24;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={MENU_ITEMS}
        key={numColumns} // important for re-render on orientation change
        numColumns={numColumns}
        contentContainerStyle={styles.listContainer}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.card,
              { width: cardSize, height: cardSize * 0.8 },
            ]}
            activeOpacity={0.8}
          >
            <Text style={styles.cardText}>{item.title}</Text>
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
  listContainer: {
    padding: 12,
    justifyContent: "center",
  },
  card: {
    margin: 6,
    borderRadius: 16,
    backgroundColor: "#FFB300",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4, // Android shadow
  },
  cardText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4E342E",
    textAlign: "center",
  },
});