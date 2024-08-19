import { YELP_API_KEY } from "@env";
import axios from "axios";

const yelpClient = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`,
  },
});

export default yelpClient;
