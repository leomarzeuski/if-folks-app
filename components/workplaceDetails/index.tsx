import { Text, View } from "react-native";
import Benefits from "../Benefits";
import OperationMode from "../OperationMode";
import EstimatedAmountOfWork from "../estimatedAmountOfWork";
import { styles } from "./styles";

const WorkplaceDetails: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workplace details</Text>
      <Text style={styles.subtitle}>Provide the details of the job. </Text>
      <OperationMode />
      <EstimatedAmountOfWork />
      <Benefits />
    </View>
  );
};

export default WorkplaceDetails;
