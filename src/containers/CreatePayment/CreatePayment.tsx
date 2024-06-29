import { CurrencyAmount } from "./components/CurrencyAmount/CurrencyAmount";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { PaymentConcept } from "./components/PaymentConcept/PaymentConcept";
import { Button } from "@/src/common/components";
import { styles } from "./CreatePayment.style";
import { currencyStore } from "@/src/store";
import { useRouter } from "expo-router";
import { postOrder } from "@/src/common/services";
import { BASE_URL } from "@/src/common/constants/services";

export function CreatePayment() {
  const { currentAmount, currentCurrency, reference } = currencyStore();
  const router = useRouter();

  const handleCreatePayment = async () => {
    postOrder({
      amount: currentAmount!,
      fiat: currentCurrency,
      reference,
    }).then((res) => {
      // console.log(res);
    });
    router.push("/send-payment");
  };

  return (
    <View style={styles.container}>
      <CurrencyAmount />
      <PaymentConcept />
      <Pressable onPress={handleCreatePayment}>
        <Text style={{ fontFamily: "Mulish-Bold", fontSize: 30 }}>pressa</Text>
      </Pressable>
      <Button
        type="primary"
        text="Continuar"
        disabled={currentAmount === 0 || !currentAmount}
        onPress={handleCreatePayment}
      />
    </View>
  );
}

export default CreatePayment;
