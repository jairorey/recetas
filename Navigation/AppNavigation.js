import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer
  } from "react-navigation";

import GenericScreen from "../Containers/GenericScreen";
import ExploreScreen from "../Containers/ExploreScreen";
import CategoriesScreen from "../Containers/CategoriesScreen";
import RecipeDetailsScreen from "../Containers/RecipeDetailsScreen";
import FavoritesScreen from "../Containers/FavoritesScreen";
import CategoryScreen from "../Containers/CategoryScreen";

import { Colors } from "../Theme";

const TabNav = createBottomTabNavigator({
    Explore: { screen: ExploreScreen },
    Categories: {screen: CategoriesScreen },
    Favorites: { screen: FavoritesScreen }
},{
    headerMode: "none",
    initialRouteName: "Explore",
    defaultNavigationOptions: {tabBarVisible: false}
});

const AppNavigator = createStackNavigator (
    {
        Home: { screen: TabNav },
        Details: { screen: RecipeDetailsScreen},
        Category: {screen: CategoryScreen}
    },
    {
        headerMode: "none",
        cardStyle: {backgroundColor: Colors.whiteGrey}
    }
);

const App = createAppContainer(AppNavigator);
export default App;