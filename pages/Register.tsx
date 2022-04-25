//* Imports
import React, { FC, useState } from "react";
import { Text, View, TextInput, KeyboardAvoidingView,Platform, Alert } from "react-native";

//* Styles
import styles from "../styles/styles-register";
import stylesButton from "../styles/styles-button";

import MyButton from "../components/UI/MyButton";

//* Config
import Config from "../Config/app-config";
const { ip, port } = Config;

//* Interfaces
interface RegisterInterface{
  navigation:any
}

interface FetchOptionsInterface{
  method: string,
  headers: any,
  body:string
}


const Register = (props:RegisterInterface) => {
  //* State
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  //* Event Handlers
  const onSubmitHandler = async () => {
    if (!username || !password) {
      Alert.alert("inputs cannot be empty!")
      return
    }
    const body = {
      username: username.toString().toLowerCase().trim(),
      password: password.toString().toLowerCase().trim()
    }
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
    const res = await sendFetch(`http://${ip}:${port}/addUser`, options);
    if (res !== "ok") {
      Alert.alert("User Already Exists!", "pick another username")
      return
    }
    props.navigation.navigate("users")
  }
  const sendFetch = async (url:string, options:FetchOptionsInterface) => {
    try {
      const res = await fetch(url, options);
      const data = await res.text();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  return (
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View style={styles.slogan}>
          <Text style={styles.sloganText}>Register Node App</Text>
        </View>
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="username" onChangeText={(text) => setUsername(text)}/>
          <TextInput style={styles.input} placeholder="password" onChangeText={(text) => setPassword(text)}/>
          <MyButton onPress={() => onSubmitHandler()}  style={stylesButton}>
            REGISTER
          </MyButton>
        </View>
      </KeyboardAvoidingView>
    );
}

export default Register;
