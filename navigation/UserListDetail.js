import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { API_URL_USERS } from '../env/Users';

const UserListDetail = ({ route }) => {

    const { id } = route.params
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(API_URL_USERS + id )
        .then(res => res.json())
        .then((data) => {
            setUsers(data);
        })
    }, [])
    

  return (
      <>
    {
        <Text> 
          id: {users.id}   name: {users.name}   email: {users.email}
         </Text>
    }

    </>
  )
}

export default UserListDetail