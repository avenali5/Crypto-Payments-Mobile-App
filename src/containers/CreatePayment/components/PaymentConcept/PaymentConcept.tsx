import React, { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import { styles } from "./PaymentConcept.style";
import { CustomText } from "@/src/common/components";
import { currencyStore } from "@/src/store";

export function PaymentConcept() {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");
  const { reference, setReference } = currencyStore();

  useEffect(() => {
    setReference(value);
  }, [value]);

  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Concepto</CustomText>
      <TextInput
        maxLength={140}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChangeText={setValue}
        style={[styles.input, focus && styles.focus]}
        multiline
        placeholder="Añade descripción del pago"
      />
      {focus && (
        <View style={styles.characters}>
          <CustomText style={styles.characters.text}>
            {reference.length}/140 caracteres
          </CustomText>
        </View>
      )}
    </View>
  );
}
