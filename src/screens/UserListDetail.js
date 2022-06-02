import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { API_URL_USERS } from '../../env/Users';

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
      <View flex={1}>
        <Text style={styles.input}> Id: {users.id}</Text>
        <Text style={styles.input}> Name: {users.name}</Text>
        <Text style={styles.input}> User Name: {users.username}</Text>         
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

export default UserListDetail