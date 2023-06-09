import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
    checkbox: {
      width: "45%",
      display: "flex",
      flexDirection: "row",
      marginBottom: 14,
    },
    lastItem: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      marginBottom: 14,
    },
    title: {
      fontSize: 18,
      fontWeight: "500",
      color: "#333333",
      paddingBottom: 35,
    },
    label: {
      marginLeft: 16,
      fontSize: 14,
      flexShrink: 0,
    },
  });