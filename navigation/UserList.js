import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../env/config';
import { FlatList } from 'react-native-gesture-handler';

const UserList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(API_URL + "users")
        .then(res => res.json())
        .then((data) => {
            setUsers(data);
        })
    }, [])
    
    const renderUser = ({item}) => {
        return <Text> 
            name: {item.name}             
        </Text>
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