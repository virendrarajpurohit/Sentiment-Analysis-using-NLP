import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AnalysisScreen from '../screens/AnalysisScreen';
import ShowTweetScreen from '../screens/ShowTweetScreen';



const AppNavigation = createStackNavigator(
  {
    Login: { screen:LoginScreen },
    Register: { screen:RegisterScreen },
    Analysis: { screen:AnalysisScreen },
    ShowTweet: { screen:ShowTweetScreen },
    Settings:{screen:SettingsScreen}
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(AppNavigation);
