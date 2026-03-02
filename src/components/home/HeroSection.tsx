import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../../screens/home/HomeScreen.styles";


export default function HeroSection() {
  return (
    <View style={styles.heroContainer}>
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