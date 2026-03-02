import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../../screens/home/HomeScreen.styles";


interface Props {
  title: string;
  image: any;
  size: number;
  onPress: () => void;
}

export default function MenuCard({ title, image, size, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.card,
        { width: size, height: size * 1.1 },
      ]}
      activeOpacity={0.9}
    >
      <View style={styles.imageContainer}>
        <Image
          source={image}
          style={styles.cardImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.titleStrip}>
        <Text style={styles.cardText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}