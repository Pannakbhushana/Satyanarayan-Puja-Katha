import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import styles from "../../screens/home/HomeScreen.styles";

export default function EcosystemCard() {

  const openPujaPadhati = () => {
    Linking.openURL("market://details?id=com.rahulmishra.PujaPadhati")
  .catch(() => {
    Linking.openURL(
      "https://play.google.com/store/apps/details?id=com.rahulmishra.PujaPadhati"
    );
  });
  };

  return (
    <TouchableOpacity style={styles.ecosystemCard} onPress={openPujaPadhati}>
      <Text style={styles.ecosystemTitle}>
        🌼 हमारे अन्य धार्मिक ऐप
      </Text>

      <Text style={styles.ecosystemSubtitle}>
        PujaPadhati – सम्पूर्ण पूजा संग्रह
      </Text>
    </TouchableOpacity>
  );
}