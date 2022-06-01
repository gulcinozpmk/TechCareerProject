import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { API_URL_POSTS } from '../env/Posts';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const PostList = ({ navigation }) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        //fetch(API_URL_POSTS)
        fetch(API_URL_POSTS + "?_limit=20") // API dan sadece 20 tane veri listeleme.
        .then(res => res.json())
        .then((data) => {
            setPosts(data);
        })
    }, [])
    
    const renderPost = ({item}) => {
        return <Pressable onPress = {()=> navigation.navigate("Post Detail", {id:item.id})}>
        <Text style={styles.input}> 
            Title: {item.title}
        </Text>
        </Pressable>
    }

  return (
    <View>
        <FlatList
        //data={posts.filter((post, id)=>id<20)} //filter yöntemi ile 20 tane veri listeleme.
        //data={posts.slice(0,20)} //slice yöntemi ile 20 tane veri listeleme.
        data={posts}
        renderItem={renderPost}
        >
        </FlatList>
    </View>
  )
}
const styles = StyleSheet.create({
    input: {
        flex:1,
        marginTop: 10,
        fontSize: 15,
        fontWeight: "bold"
    }
});

export default PostList