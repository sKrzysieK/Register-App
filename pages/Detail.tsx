//* Imports
import React, { Component, FC } from "react";
import { Text, View } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

//* Styles
import styles from "../styles/styles-detail";
import stylesButton from "../styles/styles-button";

//* Components
import MyButton from "../components/UI/MyButton";

//* Interfaces
interface DetailInterface{
  navigation: any
  route:any
}

const Detail = (props:DetailInterface) => {
  const returnHandler = () => props.navigation.navigate("users");
  return (
      <View style={styles.detail}>
        <FontAwesomeIcon icon={faUser} style={styles.icon} size={200} />
        <Text>
          <Text style={styles.prefix}> username: </Text>
          <Text style={styles.info}>
            {props.route.params.user.username}
          </Text>
        </Text>
        <Text>
          <Text style={styles.prefix}> password: </Text>
          <Text style={styles.info}>
            {props.route.params.user.password}
          </Text>
        </Text>
        <Text>
          <Text style={styles.prefix}> date: </Text>
          <Text style={styles.info}>{props.route.params.user.date}</Text>
        </Text>
        <MyButton onPress={() => returnHandler()} style={stylesButton}>
          BACK TO USERS PAGE
        </MyButton>
      </View>
    );
}

export default Detail;
