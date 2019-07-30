import {
    createStackNavigator,
    createBottomTabNavigator,
    createDrawerNavigator,
    createAppContainer
  } from "react-navigation";

import GenericScreen from "../Containers/GenericScreen";
import ExploreScreen from "../Containers/ExploreScreen";
import CategoriesScreen from "../Containers/CategoriesScreen";
import { Colors } from "../Theme";
import TabBar from "../Components/TabBar";

const TabNav = createBottomTabNavigator({
    Explore: { screen: ExploreScreen },
    Categories: {screen: CategoriesScreen },
    Favorites: { screen: GenericScreen }
},{
    headerMode: "none",
    initialRouteName: "Explore",
    defaultNavigationOptions: {tabBarVisible: false}
});

const AppNavigator = createStackNavigator (
    {
        Home: { screen: TabNav }
    },
    {
        headerMode: "none",
        cardStyle: {backgroundColor: Colors.whiteGrey}
    }
);

const App = createAppContainer(AppNavigator);
export default App;