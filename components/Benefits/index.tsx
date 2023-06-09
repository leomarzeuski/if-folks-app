import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import BenefictsMOBILE from "./mobile";
import BenefictsWEB from "./web";

const Beneficts: React.FC = () => {
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

  return <>{windowWidth <= 1300 ? <BenefictsMOBILE /> : <BenefictsWEB />}</>;
};

export default Beneficts;
