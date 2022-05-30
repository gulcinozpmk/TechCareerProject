import { View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { API_URL_USERS } from '../env/Users';

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
            <Text> name: {item.name} </Text>
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

export default UserList