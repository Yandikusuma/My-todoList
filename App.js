/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from "react";
import RootStackNavigation from './src/navigation/RootStackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabNavigation from "./src/navigation/MainTabNavigation";


const Drawer = createDrawerNavigator();
class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <RootStackNavigation />
      </NavigationContainer>
    )
  }
}


export default App;
