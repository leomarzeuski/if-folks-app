import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        marginTop: 20,
      },
      containerGroupButton: {
        marginTop: 22,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      title: {
        fontSize: 18,
        fontWeight: "500",
        color: "#333333",
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