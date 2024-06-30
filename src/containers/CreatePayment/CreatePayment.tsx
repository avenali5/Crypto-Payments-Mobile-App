import { CurrencyAmount } from "./components/CurrencyAmount/CurrencyAmount";
import React, { useState } from "react";
import { View } from "react-native";
import { PaymentConcept } from "./components/PaymentConcept/PaymentConcept";
import { styles } from "./CreatePayment.style";
import { currencyStore } from "@/src/store";
import { useRouter } from "expo-router";
import { postOrder } from "@/src/common/services";
import { Button } from "@/src/common/components/Button/Button";

export function CreatePayment() {
  const {
    currentAmount,
    currentCurrency,
    reference,
    setPaymentURL,
    setIdentifier,
  } = currencyStore();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleCreatePayment = async () => {
    setLoading(true);
    setDisabled(true);
    postOrder({
      amount: currentAmount!,
      fiat: currentCurrency,
      reference,
    }).then((res) => {
      setLoading(false);
      setDisabled(false);
      setPaymentURL(res.web_url);
      setIdentifier(res.identifier);
      router.push("/send-payment");
    });
  };

  return (
    <View style={styles.container}>
      <CurrencyAmount />
      <PaymentConcept />
      <Button
        type="primary"
        text="Continuar"
        disabled={currentAmount! < 0.1 || !currentAmount || disabled}
        onPress={handleCreatePayment}
        loading={loading}
      />
    </View>
  );
}

export default CreatePayment;
