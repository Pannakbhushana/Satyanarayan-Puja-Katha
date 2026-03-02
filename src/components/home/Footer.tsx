import React from "react";
import { View, Text } from "react-native";
import styles from "../../screens/home/HomeScreen.styles";


export default function Footer() {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerDivider} />
      <Text style={styles.footerMantra}>
        ॐ नमो भगवते वासुदेवाय
      </Text>
    </View>
  );
}