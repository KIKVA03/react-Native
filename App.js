import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/componentsScreen";
import ListComponent from "./src/screens/listComponent";
import ImageScreen from "./src/screens/imageScreen";

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        Components: ComponentsScreen,
        List: ListComponent,
        imagesScreen: ImageScreen,
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            title: "App",
        },
    }
);

export default createAppContainer(navigator);
