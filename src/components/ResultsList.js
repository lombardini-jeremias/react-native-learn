import React from "react";
import { withNavigation } from "react-navigation";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, priceFilter, navigation }) => {
  if (!priceFilter.length) {
    return null;
  }

  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text></Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={priceFilter}
        keyExtractor={(business) => business.id}
        renderItem={({ item }) => {
          // console.log("ITEM", item);
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Business", { businessId: item.id });
              }}
            >
              <ResultsDetail business={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default withNavigation(ResultsList);
