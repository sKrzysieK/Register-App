import * as React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "100%",
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  slogan: {
    backgroundColor: "#8BC34A",
    height: "30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    // flex: 1,
  },
  sloganText: {
    color: "#DCEDC8",
    fontSize: 30,
  },
  form: {
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "70%",
    // flex: 3,
  },

  input: {
    margin: 10,
    width: "75%",
    padding: 15,
    backgroundColor: "#DCEDC8",
  },
});

export default styles;
