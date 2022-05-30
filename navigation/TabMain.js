import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import UserList from './UserList';
import PostList from './PostList';
import UserStack from './UserStack';


const Tab = createBottomTabNavigator();

const tabs = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name='User List' component={UserStack}
            options={{
                tabBarIcon:()=>(<Icon name='user' size={36}/>)
            }}>
            </Tab.Screen>

            <Tab.Screen name='Post List' component={PostList}
            options={{
                tabBarIcon:()=>(<Icon name='check' size={36}/>)
            }}>
            </Tab.Screen>

        </Tab.Navigator>

    </NavigationContainer>
  )
}

export default tabs