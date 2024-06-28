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

  useEffect(() => {
    setAmount(value);
  }, [value]);

  console.log(currencySign);

  return (
    <View style={styles.container}>
      <CurrencyInput
        // @ts-ignore
        value={value}
        placeholderTextColor="#C0CCDA"
        caretHidden
        // @ts-ignore
        onChangeValue={setValue}
        delimiter="."
        separator=","
        precision={2}
        placeholder={
          currentCurrency === "USD" || currentCurrency === "GBP"
            ? `${currencySign} 0.00`
            : `0.00 ${currencySign}`
        }
        maxValue={9999}
        prefix={
          currentCurrency === "USD" || currentCurrency === "GBP"
            ? currencySign
            : ""
        }
        suffix={currentCurrency === "EUR" ? currencySign : ""}
        onChangeText={(formattedValue) => {
          setAmount(formattedValue);
        }}
        style={[styles.text, styles.input]}
      />
    </View>
  );
}
