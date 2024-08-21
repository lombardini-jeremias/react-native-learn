import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function ResultsDetail({ business }) {
  // console.log("ResultsDetail", business);
  return (
    <View style={{ margin: 10 }}>
      <Image
        source={{ uri: business.image_url }}
        style={{ width: 200, height: 110 }}
      />
      <Text style={styles.titleStyle}>{business.name}</Text>
      <Text style={styles.infoStyle}>
        {business.rating} Stars, {business.review_count} Reviews
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 15,
    fontWeight: "bold",
  },

  infoStyle: {
    fontSize: 15,
    fontWeight: "light",
    color: "grey",
  },
});
