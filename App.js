import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/componentsScreen";
import ListComponent from "./src/screens/listComponent";

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Components: ComponentsScreen,
        List: ListComponent,
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            title: "App",
        },
    }
);

export default createAppContainer(navigator);
