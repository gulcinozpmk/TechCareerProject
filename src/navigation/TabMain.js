import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import UserList from '../screens/UserList';
import PostList from '../screens/PostList';
import UserStack from '../screens/UserStack';
import PostStack from '../screens/PostStack';


const Tab = createBottomTabNavigator();

const tabs = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='User List' component={UserStack}
            options={{
                tabBarIcon:()=>(<Icon name='user' size={32}/>)
            }}>
            </Tab.Screen>

            <Tab.Screen name='Post List' component={PostStack}
            options={{
                tabBarIcon:()=>(<Icon name='check' size={32}/>)
            }}>
            </Tab.Screen>

        </Tab.Navigator>

    </NavigationContainer>
  )
}

export default tabs