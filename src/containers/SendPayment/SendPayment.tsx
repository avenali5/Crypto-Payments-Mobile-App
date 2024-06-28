import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { styles } from "./SendPayment.style";
import { Button, CustomText } from "@/src/common/components";
import { PaymentTotal } from "./components/PaymentTotal/PaymentTotal";
import { useRouter } from "expo-router";
import { Options } from "./components/Options/Options";

export function SendPayment() {
  const router = useRouter();

  const handleNewRequest = () => {
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <PaymentTotal />
      <Options />
      <Button
        text="Nueva solicitud"
        type="secondary"
        onPress={handleNewRequest}
      />
    </View>
  );
}
