import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import OperationMode from "../components/OperationMode";
import EstimatedAmountOfWork from "../components/estimatedAmountOfWork";
import Benefits from "../components/Benefits";
import WorkplaceDetails from "../components/workplaceDetails";
import ExampleBoxContent from "../components/exampleBoxContent";

const App: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(
    Dimensions.get("window").width
  );

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(Dimensions.get("window").width);
    };

    const listiner = Dimensions.addEventListener("change", updateWindowWidth);

    return () => {
      listiner.remove();
    };
  }, []);

  return (
    <>
      {windowWidth <= 1300 ? (
        <>
          <View style={styles.header} />
          <ScrollView style={styles.container}>
            <Text style={styles.title}>Workplace details</Text>
            <Text style={styles.subtitle}>
              Provide the details of the job.{" "}
            </Text>
            <OperationMode />
            <EstimatedAmountOfWork />
            <Benefits />
          </ScrollView>
        </>
      ) : (
        <View style={stylesWeb.container}>
          <View style={stylesWeb.header} />
          <View style={stylesWeb.content}>
            <WorkplaceDetails />
            <ExampleBoxContent />
          </View>
          <View style={stylesWeb.footer} />
        </View>
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 22,
    top: 0,
    position: "absolute",
    backgroundColor: "#fff",
    zIndex: 1,
  },
  container: {
    padding: 35,
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

const stylesWeb = StyleSheet.create({
  header: {
    width: "100%",
    height: "10vh",
    backgroundColor: "#fff",
    top: 0,
    zIndex: 1,
  },
  container: {
    backgroundColor: "#F5F5F5",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    flex: 1,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    paddingTop: 24,
    paddingBottom: 42,
  },
  footer: {
    width: "100%",
    height: "8vh",
    backgroundColor: "#fff",
    bottom: 0,
    zIndex: 1,
  },
});
