import { useState, useEffect } from "react";
import yelpClient from "../api/yelpClient";

export default function useResultsYelp() {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("SEARCH-TERM:", searchTerm);

    try {
      const response = await yelpClient.get("/search", {
        params: {
          limit: 20,
          term: searchTerm,
          location: "Buenos Aires",
        },
      });
      // console.log("RESTAURANTSs:", response.data.businesses);

      return setResults(response.data.businesses);
    } catch (error) {
      console.error("Error fetching businesses: ", error);
      setErrorMessage("Something went wrong");
      throw error;
    }
  };

  useEffect(() => {
    searchApi("");
  }, []);

  return [searchApi, results, errorMessage];
}
