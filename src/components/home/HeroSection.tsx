import React from "react";
import { View, Image, useWindowDimensions, Text } from "react-native";
import styles from "../../screens/home/HomeScreen.styles";


export default function HeroBanner() {
  const { width } = useWindowDimensions();

  const containerWidth =
    width > 1000 ? 900 : width - 24; // padding safe

  return (
    <View style={[styles.heroWrapper, { width: containerWidth }]}>
      <Image
        source={require("../../../assets/banner/satyanarayan.webp")}
        style={styles.heroImage}
        resizeMode="cover"
      />
      <View style={styles.overlay}>
        <Text style={styles.heroTitle}>
          🪔 सत्यनारायण पूजा एवं कथा
        </Text>
        <Text style={styles.heroSubtitle}>
          Complete Vidhi • Katha • Aarti • Offline
        </Text>
      </View>
    </View>
  );
}