import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import { createAppContainer } from "react-navigation";
import BusinessScreen from "./src/screens/BusinessScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Business: BusinessScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
