import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screen/splashscreen/SplashScreen';
import Intro from '../screen/splashscreen/Intro';

const RootStack = createStackNavigator();

const RootStackNavigation = ({navigation}) => {
    return(
        <RootStack.Navigator headerMode='none'>
            <RootStack.Screen name="Intro" component={Intro}/>
            <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        </RootStack.Navigator>
    )
}

export default RootStackNavigation;







/*import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;*/