import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

interface IButtonGroup {
  btn_one: string;
  btn_two: string;
  btn_three: string;
  width?: number;
}

const ButtonGroup: React.FC<IButtonGroup> = ({
  btn_one,
  btn_two,
  btn_three,
  width,
}) => {
  const [buttonPressed, setButtonPressed] = useState({
    btn_one: false,
    btn_two: false,
    btn_three: false,
  });

  const GroupStyle = width
    ? {
        ...styles.containerGroupButton,
        width,
      }
    : styles.containerGroupButton;

  const handlePress = (button: string) => {
    setButtonPressed({
      btn_one: button === "btn_one" ? !buttonPressed.btn_one : false,
      btn_two: button === "btn_two" ? !buttonPressed.btn_two : false,
      btn_three: button === "btn_three" ? !buttonPressed.btn_three : false,
    });
  };
  return (
    <View style={GroupStyle}>
      <Pressable
        onPress={() => handlePress("btn_one")}
        style={buttonPressed.btn_one ? styles.pressedButton : styles.button}
      >
        <Text
          style={
            buttonPressed.btn_one ? styles.pressedButtonText : styles.buttonText
          }
        >
          {btn_one}
        </Text>
      </Pressable>
      <Pressable
        onPress={() => handlePress("btn_two")}
        style={buttonPressed.btn_two ? styles.pressedButton : styles.button}
      >
        <Text
          style={
            buttonPressed.btn_two ? styles.pressedButtonText : styles.buttonText
          }
        >
          {btn_two}
        </Text>
      </Pressable>
      <Pressable
        onPress={() => handlePress("btn_three")}
        style={buttonPressed.btn_three ? styles.pressedButton : styles.button}
      >
        <Text
          style={
            buttonPressed.btn_three
              ? styles.pressedButtonText
              : styles.buttonText
          }
        >
          {btn_three}
        </Text>
      </Pressable>
    </View>
  );
};

export default ButtonGroup;
