//* Imports
import React, { FC, useEffect, useState } from "react";
import { View } from "react-native";

//* Components
import MyButton from "../components/UI/MyButton";
import UsersList from "../components/UsersList";

//* Styles
import styles from "../styles/styles-users";
import stylesButton from "../styles/styles-button";

//* Config
import Config from "../Config/app-config";
const { ip, port } = Config;

//* Interfaces
import User from "../typescript/interfaces/User";

interface UsersInterface{
  navigation:any
}

const Users = (props:UsersInterface) => {
  //* State
  const [users, setUsers] = useState<User[]>([])

  //* Handlers
  const returnHandler = () => props.navigation.navigate("register page");
  const getUsers = async () => {
    try {
      const res = await fetch(`http://${ip}:${port}/users`);
      const data = await res.json();
      setUsers(data)
      return data;
    } catch (err) {
      console.log("rejected");
    }
  };
  const deleteUser = async (user:User) => {
    const res = await fetch(`http://${ip}:${port}/delete`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    setUsers(data)
  };

  //* On Mount Event
  useEffect(() => { 
    getUsers()
  }, [])
  
   return (
      <View style={styles.container}>
        <MyButton onPress={() => returnHandler()} style={stylesButton}>BACK TO REGISTER PAGE</MyButton>
        <UsersList users={users} deleteUser={ deleteUser} navigation={props.navigation}/>
      </View>
    );
}

export default Users;
