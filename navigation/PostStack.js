import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostList from './PostList';
import PostListDetail from './PostListDetail';

const Stack = createNativeStackNavigator();

const PostStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Posts" component={PostList} />
            <Stack.Screen name="Post Detail" component={PostListDetail} />
        </Stack.Navigator>
   
    )
}

export default PostStack