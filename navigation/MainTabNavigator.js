import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import TabBarText from '../components/TabBarText';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import FlexDirectionBasics from '../screens/FlexDirectionBasics';
import JustifyContentBasics from '../screens/JustifyContentBasics';
import AlignItemsBasics from '../screens/AlignItemsBasics';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    headerMode: 'none'
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <TabBarText focused={focused}>Home</TabBarText>
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
};

const FlexStack = createStackNavigator(
  {
    Flex: FlexDirectionBasics,
  },
  {
    headerMode: 'none'
  }
);

FlexStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <TabBarText focused={focused}>Home</TabBarText>
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
};

const JustifyStack = createStackNavigator(
  {
    Justify: JustifyContentBasics,
  },
  {
    headerMode: 'none'
  }
);

JustifyStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <TabBarText focused={focused}>Home</TabBarText>
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
};

const AlignStack = createStackNavigator(
  {
    Align: AlignItemsBasics,
  },
  {
    headerMode: 'none'
  }
);

AlignStack.navigationOptions = {
  tabBarLabel: ({ focused }) => (
    <TabBarText focused={focused}>Home</TabBarText>
  ),
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  FlexStack,
  JustifyStack,
  AlignStack,
});
