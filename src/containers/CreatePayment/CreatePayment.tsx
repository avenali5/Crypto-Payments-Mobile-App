import { CurrencyAmount } from "./components/CurrencyAmount/CurrencyAmount";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { PaymentConcept } from "./components/PaymentConcept/PaymentConcept";
import { Button } from "@/src/common/components";
import { styles } from "./CreatePayment.style";
import { currencyStore } from "@/src/store";
import { createOrder } from "@/src/common/services";
import { orders_list } from "@/src/common/services/get_orders";
import { useRouter } from "expo-router";

export function CreatePayment() {
  const { currentAmount, currentCurrency, setAmount, currencySign } =
    currencyStore();
  const router = useRouter();

  const handleCreatePayment = async () => {
    // orders_list("ec8eccef-f2d1-40f4-82e1-c6c52eee92e6");
    router.push("/send-payment");
  };

  console.log(currentAmount);

  return (
    <View style={styles.container}>
      <CurrencyAmount />
      <PaymentConcept />
      <Pressable
        onPress={() =>
          // getOrders().then((res) => {
          //   console.log(res);
          // })
          handleCreatePayment()
        }
      >
        <Text style={{ fontFamily: "Mulish-Bold", fontSize: 30 }}>pressa</Text>
      </Pressable>
      <Button
        type="primary"
        text="Continuar"
        disabled={currentAmount == "0" || !currentAmount}
        onPress={handleCreatePayment}
      />
    </View>
  );
}

export default CreatePayment;
