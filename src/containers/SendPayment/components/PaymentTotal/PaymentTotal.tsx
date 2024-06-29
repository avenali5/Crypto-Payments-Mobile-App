import React from "react";
import { Image, View } from "react-native";
import { styles } from "./PaymentTotal.style";
import { CustomText } from "@/src/common/components";
import { currencyStore } from "@/src/store";
import MoneyTime from "@/assets/icons/money_time.png";

export function PaymentTotal() {
  const { currentAmount, currentCurrency, currencySign } = currencyStore();

  return (
    <View style={styles.container}>
      <View style={styles.topWrapper}>
        <Image source={MoneyTime} style={styles.icon} />
        <View style={styles.textWrapper}>
          <CustomText style={styles.textWrapper.title}>
            Solicitud de pago
          </CustomText>
          <CustomText style={styles.textWrapper.amount}>
            {currentCurrency === "USD" || currentCurrency === "GBP"
              ? `${currencySign} ${currentAmount?.toFixed(2)}`
              : `${currentAmount?.toFixed(2)} ${currencySign}`}
          </CustomText>
        </View>
      </View>
      <View style={styles.bottomWrapper}>
        <CustomText style={styles.bottomWrapper.text}>
          Comparte el enlace de pago con el cliente
        </CustomText>
      </View>
    </View>
  );
}
