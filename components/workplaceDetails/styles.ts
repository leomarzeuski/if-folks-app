import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      borderRadius: 8,
      padding: 20,
      width: 900,
      minHeight: 760,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.15,
      shadowRadius: 30,
    },
    title: {
      fontSize: 26,
      fontWeight: "500",
      color: "#333333",
    },
    subtitle: {
      color: "#333333",
      fontSize: 16,
      paddingTop: 3,
    },
  });