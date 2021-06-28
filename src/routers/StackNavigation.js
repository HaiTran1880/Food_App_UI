import React from 'react';
import TabNavigatior from './TabNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as ScreenName from './ScreenNames';

import CollectionsByFozzi from '../screens/collections_by_foozi';
import CreateAccount from '../screens/create_account';
import EditProfile from '../screens/edit_profile';
import Favourite from '../screens/favourite';
import ForgotPassword from '../screens/forgot_password';
import Home from '../screens/home';
import Login from '../screens/login';
import MyOder from '../screens/myoder';
import OTP from '../screens/otp';
import Places from '../screens/places';
import Profile from '../screens/profile';
import Verify from '../screens/verify';
import Welcome from '../screens/welcome';
import Restaurant2 from '../screens/restaurant02';
import Restaurant1 from '../screens/restaurant_1';
import Pay from '../screens/pay';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            screenOptions={{

            }}
            headerMode={'none'}
            initialRouteName={ScreenName.WELCOME}
        >

            <Stack.Screen name={ScreenName.COLLECTIONS} component={CollectionsByFozzi} />
            <Stack.Screen name={ScreenName.TABBAR} component={TabNavigatior} />
            <Stack.Screen name={ScreenName.CREATEACOUNT} component={CreateAccount} />
            <Stack.Screen name={ScreenName.EIDTPROFILE} component={EditProfile} />
            <Stack.Screen name={ScreenName.FAVOURITE} component={Favourite} />
            <Stack.Screen name={ScreenName.FORGOTPASS} component={ForgotPassword} />
            <Stack.Screen name={ScreenName.HOMESCREEN} component={Home} />
            <Stack.Screen name={ScreenName.LOGINSCREEN} component={Login} />
            <Stack.Screen name={ScreenName.MYODER} component={MyOder} />
            <Stack.Screen name={ScreenName.OTP} component={OTP} />
            <Stack.Screen name={ScreenName.PLACES} component={Places} />
            <Stack.Screen name={ScreenName.PROFILE} component={Profile} />
            <Stack.Screen name={ScreenName.VERIFY} component={Verify} />
            <Stack.Screen name={ScreenName.WELCOME} component={Welcome} />
            <Stack.Screen name={ScreenName.RESTAURANT} component={Restaurant1} />
            <Stack.Screen name={ScreenName.RESTAURANT2} component={Restaurant2} />
            <Stack.Screen name={ScreenName.PAY} component={Pay} />
        </Stack.Navigator>
    )
}
export default function All() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}