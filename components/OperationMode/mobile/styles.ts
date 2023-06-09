import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      paddingTop: 36,
      paddingRight: 24,
    },
    inputContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      marginTop: 5,
    },
    input: {
      height: 40,
      borderWidth: 1,
      padding: 10,
      marginTop: 5,
      borderColor: "#F1EFEE",
      borderRadius: 8,
      color: "#333333",
      width: "100%",
    },
    inputText: {
      color: "#898989",
    },
    title: {
      fontSize: 18,
      fontWeight: "500",
      color: "#333333",
    },
    CheckboxContainer: {
      display: "flex",
      flexDirection: "row",
      marginTop: 14,
      alignItems: "flex-start",
    },
    label: {
      marginLeft: 16,
      fontSize: 14,
    },
  });