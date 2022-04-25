import React, { FC } from 'react'
import { Text, FlatList } from "react-native";
import ListItem from "./ListItem";

//* Interfaces
import User from '../typescript/interfaces/User'

interface UsersListInterface{
    users: User[]
    deleteUser: (user: User) => void
    navigation:any
}

const UsersList = (props:UsersListInterface) => {
    return (<>
    {
        props.users[0] ? (
        <FlatList data={props.users}
            renderItem={({ item }) => (
                <ListItem key={item.key} user={item} deleteHandler={(user:User) => props.deleteUser(user)} navigation={props.navigation}/>)}/>
        ) : <Text>Loading users...</Text>
    }
    </>)
}

export default UsersList