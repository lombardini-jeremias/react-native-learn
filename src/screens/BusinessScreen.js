import React, { useState, useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import yelpClient from "../api/yelpClient";

export default function BusinessScreen({ navigation }) {
  const [business, setBusiness] = useState(null);
  const businessId = navigation.getParam("businessId");

  // console.log("BUSINESS", business);
  const getBusinessData = async (businessId) => {
    try {
      const response = await yelpClient.get(`/${businessId}`);
      console.log("RESPONSE", response.data);
      setBusiness(response.data);
    } catch (error) {
      console.error("Error fetching business by ID: ", error);
      return setBusiness({ error: "Error fetching business data" });
    }
  };

  // const getBusinessData = async (businessId) => {
  //   try {
  //     const response = await yelpClient.get(`/${businessId}`);
  //     return setBusiness(response.data);
  //   } catch (error) {
  //     console.error("Error fetching business by ID: ", error);
  //     return setBusiness({ error: "Error fetching business data" });
  //     // throw error;
  //   }
  // };

  useEffect(() => {
    getBusinessData(businessId);
  }, []);

  if (!business) {
    return <ActivityIndicator size="large" color="#000" />;
  }

  if (business.error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorStyle}>{business.error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{business.name}</Text>
      {business.photos && business.photos.length > 0 ? (
        <FlatList
          data={business.photos}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return <Image style={styles.imageStyle} source={{ uri: item }} />;
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <Text>No photos available</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  titleStyle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  imageStyle: {
    width: 300,
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
    marginRight: 10,
  },
  errorStyle: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
});
