import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function SearchBar({ term, onChangeTerm, onSubmitTerm }) {
  return (
    <View style={styles.bgStyle}>
      <FontAwesome
        name="search"
        style={styles.iconStyle}
        size={25}
        color="black"
      />
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={term}
        onChangeText={onChangeTerm}
        onEndSubmit={onSubmitTerm}
      />
      <Button title="Search" onPress={onSubmitTerm} />
    </View>
  );
}

const styles = StyleSheet.create({
  bgStyle: {
    marginTop: 10,
    marginLeft: 5,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 1,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    alignSelf: "flex-start",
    marginHorizontal: 15,
    alignSelf: "center",
  },
});
