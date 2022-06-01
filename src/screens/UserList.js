import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { API_URL_USERS } from '../../env/Users';

const UserList = ({ navigation }) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(API_URL_USERS)
        .then(res => res.json())
        .then((data) => {
            setUsers(data);
        })
    }, [])
    
    const renderUser = ({item}) => {
        return <Pressable onPress={()=> navigation.navigate("User Detail", {id: item.id})}> 
            <Text style={styles.input}> Name: {item.name} </Text>
        </Pressable>
    }

  return (
    <View>
        <FlatList
        data={users}
        renderItem={renderUser}
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

export default UserList