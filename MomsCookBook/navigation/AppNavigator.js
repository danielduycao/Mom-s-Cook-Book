import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import AddNewCategoryScreen from '../screens/main/AddNewCategoryScreen';
import DashboardScreen from '../screens/main/DashboardScreen';
import FavoritesScreen from '../screens/main/FavoritesScreen';
import GalleryScreen from '../screens/main/GalleryScreen';
import RecipeDetailScreen from '../screens/main/RecipeDetailScreen';
import SearchScreen from '../screens/main/SearchScreen';
import AuthScreen from '../screens/user/AuthScreen';
import Colors from '../constants/colors';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTitle: 'A screen'
};

const RecipesNavigator = createStackNavigator(
  {
    Dashboard: DashboardScreen,
    Favorites: FavoritesScreen,
    Gallery: GalleryScreen,
    RecipeDetail: RecipeDetailScreen
  },
  { defaultStackNavOptions: defaultStackNavOptions }
);

const AuthNavigator = createStackNavigator({
  Auth: AuthScreen
});

// const AppNavigator = createDrawerNavigator({});

const MainNavigator = createSwitchNavigator({
  // Startup: StartUpScreen,
  Auth: AuthNavigator,
  Recipes: RecipesNavigator
});

export default createAppContainer(MainNavigator);
