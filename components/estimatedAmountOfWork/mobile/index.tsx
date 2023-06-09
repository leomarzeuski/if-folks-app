import { Text, View } from "react-native";
import ButtonGroup from "../../buttonGroup";
import { styles } from "./styles";

const EstimatedAmountOfWorkMOBILE: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estimated amount of work</Text>
      <ButtonGroup
        btn_one="Full-time"
        btn_two="Part-time"
        btn_three="Additional job"
      />
    </View>
  );
};

export default EstimatedAmountOfWorkMOBILE;
