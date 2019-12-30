import React from 'react';
import { StyleSheet } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import createTabNavigator from './createTabNavigator';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import Settings from '../Settings';
import Colors from '../common/colors';
import Game from '../Game';
import Login from '../Login';
import Playground from '../Playground';

const hideHeaderOptions = {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
};

const bottomNavigationOptions = {
  animationEnabled: true,
  initialRouteName: 'Playground',
  order: ['MyKingdom', 'Playground', 'Settings'],
  barStyle: {
    backgroundColor: Colors.tabBar,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Colors.tabIconDefault,
  },
  resetOnBlur: false,
  shifting: true,
  activeTintColor: '#566ed3',
  inactiveTintColor: '#999999',
  tabBarOptions: {
    style: {
      backgroundColor: Colors.tabBar,
    },
    activeTintColor: '#566ed3',
    inactiveTintColor: '#999999',
  },
};

const renderIcon = (name, tintColor) => (
  <Ionicons
    style={{ color: tintColor }}
    name={name}
    size={25}
  />
);

const TabNavigator = createTabNavigator({
  MyKingdom: {
    screen: Game,
    navigationOptions: {
      title: 'Kingdom',
      tabBarLabel: 'My Kingdom',
      tabBarIcon: ({ tintColor }) => renderIcon('md-home', tintColor),
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => renderIcon('md-settings', tintColor),
    },
  },
  Playground: {
    screen: Playground,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => renderIcon('md-planet', tintColor),
    },
  },
}, bottomNavigationOptions);

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    path: 'login/',
  },
}, hideHeaderOptions);

const HomeStack = createStackNavigator({
  Home: {
    screen: TabNavigator,
    path: 'kingdom/',
  },
}, hideHeaderOptions);

const AppNavigator = createSwitchNavigator({
  Auth: AuthStack,
  Home: HomeStack,
}, {
  initialRouteName: 'Home',
  ...hideHeaderOptions,
});

export default AppNavigator;
