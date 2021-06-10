import React from 'react';

import { createBottomTabNavigator, createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screen/Home';
import Details from '../screen/Detail';



const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();


const Tab =  createMaterialBottomTabNavigator();

const MainTabNavigation = () => {
    return(
    <Tab.Navigator 
        initialRouteName= "Home"
        activeColor='#fff'
    >
        <Tab.Screen 
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarColor: '#009387'
            }}
        />
        <Tab.Screen 
            name='Details'
            component={DetailsStackScreen}
            options={{
                tabBarLabel: 'Detail',
                tabBarColor: '#009387'
              }}
        />
    </Tab.Navigator>
    )
}

export default MainTabNavigation

const HomeStackScreen = () => {
    return(
    <HomeStack.Navigator screenOptions={{ 
        headerStyle: {
            backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="Home" component={HomeScreen}/>
    </HomeStack.Navigator>
    )
};


const DetailsStackScreen = () => {
    return(
    <DetailsStack.Navigator screenOptions={{ 
        headerStyle: {
            backgroundColor: '#1f65ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
     }}>
            <HomeStack.Screen name="Detail" component={Details}/>
    </DetailsStack.Navigator>
    )
}