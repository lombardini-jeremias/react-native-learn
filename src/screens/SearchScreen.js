import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useResultsYelp from "../hooks/useResultsYelp";
import ResultsList from "../components/ResultsList";

export default function SearchScreen() {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResultsYelp();
  // console.log("ALIAS", results.alias);

  const filterResultsByPrice = (price) => {
    // console.log("PRICE:", price);
    try {
      return results.filter((results) => {
        return results.price === price;
      });
    } catch (error) {
      console.error("Error Filtering results: ", error);
      throw error;
    }
  };

  return (
    <View>
      <SearchBar
        term={term}
        onChangeTerm={setTerm}
        onSubmitTerm={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          priceFilter={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList
          priceFilter={filterResultsByPrice("$$")}
          title="Bit Pricier"
        />
        <ResultsList
          priceFilter={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
