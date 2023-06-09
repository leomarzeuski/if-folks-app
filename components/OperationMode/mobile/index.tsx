import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import CheckBox from "../../checkbox";
import { styles } from "./styles";

const OperationModeMOBILE: React.FC = () => {
  const [isStationarySelected, setStationarySelection] = useState(false);
  const [isHybridSelected, setHybridSelection] = useState(false);
  const [isRemoteSelected, setRemoteSelection] = useState(false);
  const [text, onChangeText] = React.useState("Gliwice");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Operation mode</Text>
      <View style={styles.CheckboxContainer}>
        <CheckBox
          value={isStationarySelected}
          setValue={setStationarySelection}
        />
        <Text style={styles.label}>Stationary work</Text>
      </View>
      <View style={styles.CheckboxContainer}>
        <CheckBox value={isHybridSelected} setValue={setHybridSelection} />
        <Text style={styles.label}>Hybrid work</Text>
      </View>
      <View style={styles.CheckboxContainer}>
        <CheckBox value={isRemoteSelected} setValue={setRemoteSelection} />
        <Text style={styles.label}>Remote work</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Town</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
    </View>
  );
};

export default OperationModeMOBILE;
