/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {AsyncStorage} from 'react-native'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image
} from "react-native";
import Login from "./src/containers/login/index";
import Authenticate from "./src/containers/authenticate";
import Home from "./src/containers/home";
import Practice from "./src/containers/practice";
import FriendList from "./src/containers/friendlist";
import Live from "./src/containers/live";
import Stats from "./src/containers/stats";
import Chat from "./src/containers/chat";
import Menu from "./src/containers/menu";
import News from "./src/containers/news";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";
import {
  friendPlaceHolderImage,
  liveTabbarActive,
  liveTabbarInActive,
  statsTabbarActive,
  statsTabbarInActive,
  chatTabbarActive,
  chatTabbarInActive,
  newsTabbarActive,
  newsTabbarInActive
} from "./src/assets/images/images";
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  async returnInitialRoute() {
    const response = await AsyncStorage.getItem('user')
    if(response != null) {
      return true
    } else {
      return false
    }
  }

  render() {
    // return (this.returnInitialRoute() ? (<AppContainer2 />) : (<AppContainer1 />))
    return <AppContainer1 />
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Live: {
      screen: Live,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image
            style={styles.tabbarIcon1}
            source={focused ? liveTabbarActive : liveTabbarInActive}
          />
        )
      }
    },
    Stats: {
      screen: Stats,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image
            style={styles.tabbarIcon2}
            source={focused ? statsTabbarActive : statsTabbarInActive}
          />
        )
      }
    },
    Chat: {
      screen: Chat,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image
            style={styles.tabbarIcon3}
            source={focused ? chatTabbarActive : chatTabbarInActive}
          />
        )
      }
    },
    News: {
      screen: News,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image
            style={styles.tabbarIcon4}
            source={focused ? newsTabbarActive : newsTabbarInActive}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#AEE675",
      inactiveTintColor: "#FFFFFF",
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: "#096B76"
      }
    }
  }
);

// const menuStack = TabNavigator(
//   {
//     Menu: {
//       screen: Menu,
//       navigationOptions: {
//         header: null
//       }
//     },
//     FriendList: {
//       screen: FriendList,
//       navigationOptions: {
//         header: null
//       }
//     }
//   },
//   {
//     initialRouteName: "Menu"
//   }
// );

const RootDrawerStack = createDrawerNavigator(
  {
    TabNavigator: {
      screen: TabNavigator
    }
  },
  {
    contentComponent: Menu,
    drawerWidth: Dimensions.get("window").width
  }
);



const rootStack1 = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    Authenticate: {
      screen: Authenticate,
      navigationOptions: {
        header: null
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    Practice: {
      screen: Practice,
      navigationOptions: {
        header: null
      }
    },
    RootDrawerStack: {
      screen: RootDrawerStack,
      navigationOptions: { header: null }
    },
    FriendList: {
      screen: FriendList,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Login'
  }
);
const rootStack2 = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    Authenticate: {
      screen: Authenticate,
      navigationOptions: {
        header: null
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    Practice: {
      screen: Practice,
      navigationOptions: {
        header: null
      }
    },
    RootDrawerStack: {
      screen: RootDrawerStack,
      navigationOptions: { header: null }
    },
    FriendList: {
      screen: FriendList,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'RootDrawerStack'
  }
);

const AppContainer1 = createAppContainer(rootStack1);
const AppContainer2 = createAppContainer(rootStack2);
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  tabbarIcon1: {
    width: 22,
    height: 20,
    marginTop: 10,
    resizeMode: "cover"
  },
  tabbarIcon2: {
    width: 23,
    height: 19,
    marginTop: 10,
    resizeMode: "cover"
  },
  tabbarIcon3: {
    width: 20,
    height: 20,
    marginTop: 10,
    resizeMode: "cover"
  },
  tabbarIcon4: {
    width: 20,
    height: 20,
    marginTop: 10,
    resizeMode: "cover"
  },
  tabbar: {
    backgroundColor: "#096B76"
  }
});