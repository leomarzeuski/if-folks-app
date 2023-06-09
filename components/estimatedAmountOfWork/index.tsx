import { Platform } from "react-native";
import EstimatedAmountOfWorkWEB from "./web";
import EstimatedAmountOfWorkMOBILE from "./mobile";

const EstimatedAmountOfWork: React.FC = () => {
  return (
    <>
      {Platform.OS === "android" ? (
        <EstimatedAmountOfWorkMOBILE />
      ) : (
        <EstimatedAmountOfWorkWEB />
      )}
    </>
  );
};
export default EstimatedAmountOfWork;
