import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ResultsDetail from "./ResultsDetail";

export default function ResultsList({ title, priceFilter }) {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text></Text>

      <FlatList
        horizontal
        data={priceFilter}
        keyExtractor={(business) => business.id}
        renderItem={({ item }) => {
          return <ResultsDetail business={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
  },
});
