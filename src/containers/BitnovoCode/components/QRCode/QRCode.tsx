import React from "react";
import { Dimensions, Image, View } from "react-native";
import { styles } from "./QRCode.style";
import { CustomText } from "@/src/common/components";
import Exclamation from "@/assets/icons/instructions.png";
import Logo from "@/assets/images/logo_bitnovo.png";
import QRCode from "react-native-qrcode-svg";
import { currencyStore } from "@/src/store";

export function QRCodeWrapper() {
  const { currentAmount, currencySign, currentCurrency, paymentURL } =
    currencyStore();
  return (
    <View style={styles.container}>
      <View style={styles.instructions}>
        <Image source={Exclamation} style={styles.icon} />
        <CustomText style={styles.label}>
          Scan the QR code and you'll be redirected to Bitnovo Pay's payment gateway.
        </CustomText>
      </View>
      <View style={styles.codeWrapper}>
        <QRCode
          value={paymentURL}
          logo={Logo}
          logoSize={Dimensions.get("window").width - 270}
          logoBackgroundColor="transparent"
          size={Dimensions.get("window").width - 80}
          color="#002859"
          ecl="Q"
        />
      </View>
      <CustomText style={styles.amount} isBold>
        {" "}
        {currentCurrency === "USD" || currentCurrency === "GBP"
          ? `${currencySign} ${currentAmount?.toFixed(2)}`
          : `${currentAmount?.toFixed(2)} ${currencySign}`}
      </CustomText>
      <CustomText style={styles.willUpdate}>
        This screen will automatically updated
      </CustomText>
    </View>
  );
}
