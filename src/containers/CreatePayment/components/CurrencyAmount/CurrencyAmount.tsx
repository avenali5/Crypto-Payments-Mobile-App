import { currencyStore } from "@/src/store";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { styles } from "./CurrencyAmount.style";
import CurrencyInput from "react-native-currency-input";

export function CurrencyAmount() {
  const { currentCurrency, setAmount, currencySign } = currencyStore();
  const [value, setValue] = useState<number | null>(null);
  const [pressing, setPressing] = useState(false);

  useEffect(() => {
    setAmount(value);
  }, [value]);

  return (
    <View style={styles.container}>
      <CurrencyInput
        value={value}
        placeholderTextColor="#C0CCDA"
        onChangeValue={setValue}
        delimiter="."
        separator=","
        precision={2}
        maxValue={99999}
        onPressIn={() => setPressing(true)}
        onPressOut={() => setPressing(false)}
        placeholder={
          currentCurrency === "USD" || currentCurrency === "GBP"
            ? `${currencySign} 0.00`
            : `0.00 ${currencySign}`
        }
        prefix={
          currentCurrency === "USD" || currentCurrency === "GBP"
            ? `${currencySign} `
            : ""
        }
        suffix={currentCurrency === "EUR" ? ` ${currencySign}` : ""}
        style={[
          styles.text,
          styles.input,
          pressing && styles.pressing,
          { fontFamily: "Mulish-Bold" },
        ]}
        selectionColor="#00000050"
      />
    </View>
  );
}
