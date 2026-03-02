import React from "react";
import { FlatList, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./HomeScreen.styles";
import { MENU_ITEMS } from "../../constants/menuItems";

import HeroSection from "../../components/home/HeroSection";
import MenuCard from "../../components/home/MenuCard";
import Footer from "../../components/home/Footer";

export default function HomeScreen() {
  const { width } = useWindowDimensions();

  let numColumns = 2;
  if (width >= 600) numColumns = 3;
  if (width >= 900) numColumns = 4;

  const cardSize = width / numColumns - 24;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={<HeroSection />}
        ListFooterComponent={<Footer />}
        data={MENU_ITEMS}
        key={numColumns}
        numColumns={numColumns}
        contentContainerStyle={styles.listContainer}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MenuCard
            title={item.title}
            image={item.image}
            size={cardSize}
          />
        )}
      />
    </SafeAreaView>
  );
}