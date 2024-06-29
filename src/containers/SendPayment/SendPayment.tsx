import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./SendPayment.style";
import { Button } from "@/src/common/components";
import { PaymentTotal } from "./components/PaymentTotal/PaymentTotal";
import { useRouter } from "expo-router";
import { Options } from "./components/Options/Options";
// @ts-ignore
import WalletIcon from "@/assets/icons/wallet_add.png";
import { SuccessDialog } from "./components/SuccessDialog/SuccessDialog";

export function SendPayment() {
  const router = useRouter();
  const [successShare, setSuccessShare] = useState(false);

  const handleNewRequest = () => {
    router.push("/");
  };

  return (
    <View>
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
