
import { createStackNavigator, 
         createAppContainer, 
         createDrawerNavigator } from 'react-navigation';
import React from 'react';
import { connect } from 'react-redux';
import Home from './containers/Home';
import Contacts from './containers/Contacts';
import Login from './containers/LogIn';
import List from './containers/List';
import TabBar from './containers/TabBar';
import { Colors } from './utilities/Colors';
import CustomDrawer from './containers/CustomDrawer';
import VectorIcon from './utilities/vectorIcons';
import LoginF from './containers/FirebaseLogin/Login';
import Main from './containers/FirebaseLogin/Main';
import SignUp from './containers/FirebaseLogin/SignUp';
import Loading from './utilities/Loading';

const Drawer = createDrawerNavigator(
    {
        FlatList: {
            screen: TabBar,
            navigationOptions: () => ({
                header: null,
                drawerIcon: () => (
                    <VectorIcon
                      name={'youtube'}
                      groupName={'AntDesign'}
                    />
                  ),
           })
        },
        Learning: {
            screen: Home,
            navigationOptions: () => ({
                header: null,
                drawerIcon: () => (
                    <VectorIcon
                      name={'table'}
                      groupName={'AntDesign'}
                    />
                  ),
            })
        },
        Contacts: {
            screen: Contacts,
            navigationOptions: () => ({
                header: null,
                drawerIcon: () => (
                    <VectorIcon
                      name={'table'}
                      groupName={'AntDesign'}
                    />
                  ),
            })
        },
    },
    {
      drawerBackgroundColor: 'white',
      contentOptions: {
        activeBackgroundColor: 'blue',
        inactiveBackgroundColor: 'white',
        activeTintColor: 'white',
        inactiveTintColor: 'blue',
      },
      contentComponent: CustomDrawer,
      drawerWidth: 200
    }
  );

const Components = {
    drawer: {
        screen: Drawer,
        navigationOptions: () => ({
            header: null,
        })
    },
    flatList: {
        screen: List,
        navigationOptions: () => ({
            title: 'FlatList',
            headerStyle: {
                backgroundColor: Colors.baseColor
            },
            headerLeft: null,
            headerTintColor: 'white',
            key: 'flatList',
            headerTitleStyle: {
                color: 'white',
                alignSelf: 'center',
                textAlign: 'center'
            },
        })
    },
    home: {
        screen: Home,
        navigationOptions: () => ({
            title: 'Learning',
            key: 'home',
            headerStyle: {
                backgroundColor: Colors.baseColor
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                color: 'white',
                alignSelf: 'center',
                textAlign: 'center'
            },
        })
    },
    Loading: {
        screen: Loading,
        navigationOptions: () => ({
            header: null,
        })
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: () => ({
            header: null,
        })
    },
    LoginF: {
        screen: LoginF,
        navigationOptions: () => ({
            header: null,
        })
    },
    Main: {
        screen: Main,
        navigationOptions: () => ({
            header: null,
        })
    },
};

const AuthStackLogin = createStackNavigator(
    {
        login: {
            screen: Login,
            navigationOptions: () => ({
                header: null,
            })
        },
        ...Components,
    },
    {
        initialRouteName: 'Loading',
    }
);

const AuthStack = createStackNavigator(
    {
        ...Components,
        login: {
            screen: Login,
            navigationOptions: () => ({
                header: null,
            })
        },
    },
);

class StackChooser extends React.Component {

    render() {
        const StackLogin =
            createAppContainer(AuthStackLogin);
        const Stack =
            createAppContainer(AuthStack);
        return (
            this.props.loginData ? <Stack /> : <StackLogin />

        );
    }
}

const mapStateToProps = (state) => ({
    loginData: state.login.loginData,
});

export default connect(mapStateToProps)(StackChooser);

