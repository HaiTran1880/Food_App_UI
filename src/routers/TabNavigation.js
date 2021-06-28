import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import R from '../assests/R';
import { Image } from 'react-native';
import Home from '../screens/home';
import MyOder from '../screens/myoder';
import Favourite from '../screens/favourite';
import Profile from '../screens/profile';
import { NavigationContainer } from '@react-navigation/native';
import images from '../assests/images';
const Tab = createBottomTabNavigator();

const TabNavigatior = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? images.icon_home1
                            : images.icon_home2
                    } else if (route.name === 'MyOder') {
                        iconName = focused ? images.icon_myoder1 : images.icon_myooder2;
                    }
                    else if (route.name === 'Favourite') {
                        iconName = focused ? images.icon_favourite1 : images.icon_favourite2;
                    }
                    else if (route.name === 'Profile') {
                        iconName = focused ? images.ion_user1 : images.icon_user2;
                    }

                    // You can return any component that you like here!
                    return <Image source={iconName} />
                },
            })}

            tabBarOptions={{
                activeTintColor: '#FF8C00',
                inactiveBackgroundColor: 'rgba(248,248,248,0.92)',
                activeBackgroundColor: 'rgba(248,248,248,0.92)'
            }}

        >
            <Tab.Screen
                name='Home'
                component={Home}
            />
            <Tab.Screen
                name='MyOder'
                component={MyOder}
            />
            <Tab.Screen
                name='Favourite'
                component={Favourite}
            />
            <Tab.Screen
                name='Profile'
                component={Profile}
            />
        </Tab.Navigator>
    )
}
export default TabNavigatior;
