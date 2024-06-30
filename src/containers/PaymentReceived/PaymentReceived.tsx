import React from "react";
import { View } from "react-native";
import { styles } from "./PaymentReceived.style";
import { PaymentData } from "./components/PaymentData/PaymentData";
import { Button } from "@/src/common/components";
import { useGlobalSearchParams, useRouter } from "expo-router";

export function PaymentReceived() {
  const router = useRouter();
  const params = useGlobalSearchParams();

  return (
    <View style={styles.container}>
      <PaymentData params={params} />
      <Button
        text="Entendido"
        type="primary"
        onPress={() => router.push("/")}
      />
    </View>
  );
}
