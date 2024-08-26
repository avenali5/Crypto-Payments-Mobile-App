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
            Payment request
          </CustomText>
          <CustomText isBold style={styles.textWrapper.amount}>
            {currentCurrency === "USD" || currentCurrency === "GBP"
              ? `${currencySign} ${currentAmount?.toFixed(2)}`
              : `${currentAmount?.toFixed(2)} ${currencySign}`}
          </CustomText>
        </View>
      </View>
      <View style={styles.bottomWrapper}>
        <CustomText style={styles.bottomWrapper.text}>
          Share this payment request with your friends
        </CustomText>
      </View>
    </View>
  );
}
