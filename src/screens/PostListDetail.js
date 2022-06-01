import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { API_URL_POSTS } from '../../env/Posts';

const PostListDetail = ({ route }) => {

    const { id } = route.params;
    
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(API_URL_POSTS + id)
        .then(res => res.json())
        .then((data) => {
            setPosts(data);
        })
      
    }, [])
    

  return (
    <>
    
    {
        <View flex={1}>
        <Text style={styles.input}> UserId: {posts.userId} </Text>
        <Text style={styles.input}> Id: {posts.id} </Text>
        <Text style={styles.input}> Title: {posts.title} </Text>
        <Text style={styles.input}> Body: {posts.body} </Text>

        </View>
    }

    </>
  )
}

const styles = StyleSheet.create({
    input: {
        marginTop: 10,
        fontSize: 15,
        color: "#0000ff",
        fontWeight: "bold"
    }
});

export default PostListDetail