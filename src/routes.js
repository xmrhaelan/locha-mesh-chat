import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import DualComponent from "./index";
import Contact from "./views/contacts";
import Config from "./views/config";
import Chat from "./views/home/Chat";
import Drawer from "./components/Drawer";

// import Gallery from "./components/Gallery";

export const AppStackNavigator = createStackNavigator({
  initial: DualComponent,
  contacts: Contact,
  config: Config,
  chat: Chat
});

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppStackNavigator
    }
  },
  {
    useNativeAnimations: false,
    contentComponent: Drawer
  }
);

export default RouteContainer = createAppContainer(MyDrawerNavigator);
