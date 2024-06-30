import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { styles } from "./SendPayment.style";
import { Button } from "@/src/common/components";
import { PaymentTotal } from "./components/PaymentTotal/PaymentTotal";
import { useNavigation, useRouter } from "expo-router";
import { Options } from "./components/Options/Options";
import WalletIcon from "@/assets/icons/wallet_add.png";
import { SuccessDialog } from "./components/SuccessDialog/SuccessDialog";
import { currencyStore } from "@/src/store";

export function SendPayment() {
  const router = useRouter();
  const navigate = useNavigation<any>();
  const [successShare, setSuccessShare] = useState(false);
  const { setAmount, identifier } = currencyStore();

  const handleNewRequest = () => {
    setAmount(0);
    router.push("/");
  };

  useEffect(() => {
    const socket = new WebSocket(
      `wss://payments.pre-bnvo.com/ws/merchant/${identifier}`
    );

    socket.onopen = () => {
      console.log("WebSocket connection opened");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data && data.percentage === 100) {
        navigate.navigate("payment-received", {
          identifier: data.identifier,
          total: data.fiat_amount,
          fiat: data.fiat,
          date: data.edited_at,
          cripto: data.currency_id,
          reference: data.reference,
        });
      }
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      socket.close();
    };
  }, [identifier]);

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <View style={styles.container}>
        <PaymentTotal />
        <Options setDialog={setSuccessShare} />
        <Button
          text="Nueva solicitud"
          type="secondary"
          onPress={handleNewRequest}
          icon={WalletIcon}
        />
      </View>

      {successShare && <SuccessDialog setDialog={setSuccessShare} />}
    </View>
  );
}
