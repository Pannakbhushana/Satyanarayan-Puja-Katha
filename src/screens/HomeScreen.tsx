import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MENU_ITEMS = [
  {
    id: "1",
    title: "Puja Vidhi",
    image: require("../../assets/icons/puja.png"),
  },
  {
    id: "2",
    title: "Katha",
    image: require("../../assets/icons/puja.png"),
  },
  {
    id: "3",
    title: "Aarti",
    image: require("../../assets/icons/puja.png"),
  },
  {
    id: "4",
    title: "Havan Vidhi",
    image: require("../../assets/icons/puja.png"),
  },
  {
    id: "5",
    title: "Samagri List",
    image: require("../../assets/icons/puja.png"),
  },
  {
    id: "6",
    title: "When to Perform",
    image: require("../../assets/icons/puja.png"),
  },
];

export default function HomeScreen() {
  const { width } = useWindowDimensions();

  let numColumns = 2;
  if (width >= 600) numColumns = 3;
  if (width >= 900) numColumns = 4;

  const cardSize = width / numColumns - 24;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.heroContainer}>
            <Image
              source={require("../../assets/banner/satyanarayan.jpg")}
              style={styles.heroImage}
              resizeMode="cover"
            />
            <View style={styles.overlay}>
              <Text style={styles.heroTitle}>
                🪔 Satyanarayan Puja & Katha
              </Text>
              <Text style={styles.heroSubtitle}>
                Complete Vidhi • Katha • Aarti • Offline
              </Text>
            </View>
          </View>
        }
        data={MENU_ITEMS}
        key={numColumns}
        numColumns={numColumns}
        contentContainerStyle={styles.listContainer}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.card,
              { width: cardSize, height: cardSize * 1.05 },
            ]}
            activeOpacity={0.85}
          >
            <Image source={item.image} style={styles.cardImage} />
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

  /* ---------------- HERO SECTION ---------------- */

  heroContainer: {
    margin: 12,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 6,
  },

  heroImage: {
    width: "100%",
    height: 220,
  },

  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  heroTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFF",
  },

  heroSubtitle: {
    fontSize: 14,
    color: "#FFE0B2",
    marginTop: 4,
  },

  /* ---------------- GRID SECTION ---------------- */

  listContainer: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },

  card: {
    margin: 6,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    elevation: 4,
  },

  cardImage: {
    width: 60,
    height: 60,
    marginBottom: 12,
    resizeMode: "contain",
  },

  cardText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#4E342E",
    textAlign: "center",
  },
});