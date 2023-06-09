import React from "react";
import { Text, TextInput, View } from "react-native";
import ButtonGroup from "../../buttonGroup";
import { styles } from "./styles";

const OperationModeWEB: React.FC = () => {
  const [text, onChangeText] = React.useState("Gliwice");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Operation mode</Text>
      <ButtonGroup
        btn_one="Stationary work"
        btn_two="Hybrid work"
        btn_three="Remote work"
        width={400}
      />
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

export default OperationModeWEB;
