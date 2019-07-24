import {
    createStackNavigator,
    createBottomTabNavigator,
    createDrawerNavigator,
    createAppContainer
  } from "react-navigation";

import GenericScreen from "../Containers/GenericScreen";

const AppNavigator = createStackNavigator (
    {
        Home: { screen: GenericScreen }
    }
);

const App = createAppContainer(AppNavigator);
export default App;