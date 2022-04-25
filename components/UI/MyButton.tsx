import React, { FC, ReactNode } from "react";
import { Text, Pressable } from "react-native";

interface ButtonInterface{
  children?: ReactNode
  style: any
  onPress: any
}

const MyButton = (props:ButtonInterface) => {
  return (
    <Pressable style={props.style.btn} onPress={props.onPress}>
    <Text style={props.style.btnText}>{props.children}</Text>
  </Pressable>
  )
}

export default MyButton;
