import Checkbox from "expo-checkbox";
import { styles } from "./styles";

interface ICheckBox {
  value: boolean;
  setValue: (value: boolean) => void;
  width?: number;
  height?: number;
}

const CheckBox: React.FC<ICheckBox> = ({
  value = false,
  setValue,
  width = 24,
  height = 24,
}) => {
  const handleChange = () => {
    setValue(!value);
  };

  const checkBoxStyle = {
    ...styles.checkbox,
    width,
    height,
  };

  // Set color based on value
  const color = value ? "#148EFF" : "#ACB1C6";

  return (
    <Checkbox
      color={color}
      value={value}
      onValueChange={handleChange}
      style={checkBoxStyle}
    />
  );
};

export default CheckBox;
