import { StyleSheet, View } from "react-native";

const ExampleBoxContent: React.FC = () => {
  return <View style={styles.box} />;
};

export default ExampleBoxContent;

const styles = StyleSheet.create({
  box: {
    width: "380px",
    height: "630px",
    backgroundColor: "#fff",
    zIndex: 1,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 30,
  },
});
