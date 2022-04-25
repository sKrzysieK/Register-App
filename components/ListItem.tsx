//* Imports
import React, { } from "react";
import { Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

//* Styles
import styles from "../styles/styles-list_item";
import stylesButtonAction from "../styles/styles-button_action";

import MyButton from "./UI/MyButton";

const ListItem = (props:any) => {
  const showDetail = (user:any) => props.navigation.navigate("detail", { user })
   return (
      <View style={styles.item}>
        <FontAwesomeIcon icon={faUser} style={{ flex: 1 }} size={10} />
        <Text style={{ flex: 2 }}>{`${props.user.key} : ${props.user.username}`}</Text>
        <View style={{ flex: 2 }}>
          <MyButton style={stylesButtonAction} onPress={(e:any) => showDetail(props.user)}>details</MyButton>
        </View>
        <View style={{ flex: 2 }}>
          <MyButton style={stylesButtonAction} onPress={(e:any) => props.deleteHandler(props.user)}>delete</MyButton>
        </View>
      </View>
    );
}

export default ListItem;
