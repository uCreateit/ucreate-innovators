import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import { Login, Home, Settings, Profile, Maps } from './containers';
import sidePanel from './components/SidePanel';
import signup from './containers/signup';
// You should not have the drawer in tab
const Tab = createBottomTabNavigator(
	{
		home: {
			screen: Home
		},
		settings: {
			screen: Settings
		}
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state;
				if (routeName === 'Home') {
					return (
						<Image
							source={require('./assets/home.png')}
							style={{ width: 20, height: 20, tintColor: tintColor }}
						/>
					);
				} else {
					return (
						<Image
							source={require('./assets/settings.png')}
							style={{ width: 20, height: 20, tintColor: tintColor }}
						/>
					);
				}
			}
		}),
		tabBarOptions: {
			activeTintColor: '#FF6F00',
			inactiveTintColor: '#263238'
		}
	}
);

// Pass the tabs in Drawer or Stack
const drawerNavigator = createDrawerNavigator(
	{
		Home: {
			screen: Tab
		},
		Profile: {
			screen: Profile
		},
		Settings: {
			screen: Settings
		},
		Profile: {
			screen: Profile
		},
		Maps: {
			screen: Maps
		}
	},
	{
		contentComponent: sidePanel,
		drawerWidth: 300
	}
);

const stack = createStackNavigator(
	{
		login: {
			screen: Login
		},
		drawer: {
			screen: drawerNavigator,
			navigationOptions: {
				header: null
			}
		},
		home: {
			screen: Home,
			navigationOptions: {
				header: null
			}
		},
		settings: {
			screen: Settings
		}
	},
	{
		initialRouteName: 'login'
	}
);

export default stack;