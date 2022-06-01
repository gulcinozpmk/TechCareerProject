import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserList from './UserList';
import UserListDetail from './UserListDetail';


const Stack = createNativeStackNavigator();

const UserStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Users" component={UserList} />
            <Stack.Screen name="User Detail" component={UserListDetail} />
        </Stack.Navigator>
   
       
    )
}

export default UserStack