import { CustomText } from "@/src/common/components";
import { currencyStore } from "@/src/store";
import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./CurrencyAmount.style";
import CurrencyInput from "react-native-currency-input";

export function CurrencyAmount() {
  const { currentAmount, currentCurrency, setAmount, currencySign } =
    currencyStore();
  const [value, setValue] = useState(currentAmount);
  const [pressing, setPressing] = useState(false);

  useEffect(() => {
    setAmount(value);
  }, [value]);

  return (
    <View style={styles.container}>
      <CurrencyInput
        // @ts-ignore
        value={value}
        placeholderTextColor="#C0CCDA"
        // @ts-ignore
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
        onChangeText={(formattedValue) => {
          setAmount(formattedValue);
        }}
        style={[styles.text, styles.input, pressing && styles.pressing]}
        selectionColor="#00000050"
        sele
      />
    </View>
  );
}
