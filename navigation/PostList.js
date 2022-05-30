import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { API_URL_POSTS } from '../env/Posts';

const PostList = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(API_URL_POSTS)
        .then(res => res.json())
        .then((data) => {
            setPosts(data);
        })
    }, [])
    
    const renderPost = ({item}) => {
        return <Text> 
            Title: {item.title}
        </Text>
    }

  return (
    <View>
        <FlatList
        data={posts}
        renderItem={renderPost}
        >

        </FlatList>
    </View>
  )
}

export default PostList