import React from "react";
import { View } from "react-native";
import { styles } from "./PaymentReceived.style";
import { PaymentData } from "./components/PaymentData/PaymentData";
import { useGlobalSearchParams, useRouter } from "expo-router";
import { Button } from "@/src/common/components/Button/Button";

export function PaymentReceived() {
  const router = useRouter();
  const params: any = useGlobalSearchParams();

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
