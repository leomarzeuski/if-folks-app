import React, { useState } from "react";
import { Text, View } from "react-native";
import CheckBox from "../../checkbox";
import { benefits } from "../mock";
import { styles } from "./styles";

type BenefitSelections = {
  [benefit: string]: boolean;
};

const BenefitsWEB: React.FC = () => {
  const [selectedBenefits, setSelectedBenefits] = useState<BenefitSelections>(
    {}
  );
  let counter = 0;

  const handleCheck = (benefit: string) => {
    setSelectedBenefits({
      ...selectedBenefits,
      [benefit]: !selectedBenefits[benefit],
    });
  };

  return (
    <View>
      <Text style={styles.title}>Benefits (optional)</Text>
      <View style={styles.container}>
        {benefits.map((benefit) => {
          counter++;
          return (
            <View
              key={benefit}
              style={
                counter === benefits.length ? styles.lastItem : styles.checkbox
              }
            >
              <CheckBox
                value={selectedBenefits[benefit] || false}
                setValue={() => handleCheck(benefit)}
                width={20}
                height={20}
              />
              <Text style={styles.label}>{benefit}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default BenefitsWEB;
