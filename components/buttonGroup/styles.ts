import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    containerGroupButton: {
      marginTop: 22,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    button: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 8,
      margin: 2,
      height: 40,
      backgroundColor: "#ffffff",
      borderColor: "#898989",
      borderWidth: 1,
      borderRadius: 8,
    },
    pressedButton: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 8,
      margin: 2,
      height: 40,
      backgroundColor: "#DCEEFF",
      borderColor: "#148EFF",
      borderWidth: 1,
      borderRadius: 8,
    },
    buttonText: {
      fontSize: 14,
      color: "#d3d3d3",
    },
    pressedButtonText: {
      color: "#148EFF",
    },
  });