import React, { useState } from "react";
import { Image, Pressable, View } from "react-native";
import { styles } from "./CurrencyOption.style";
import { CustomText } from "@/src/common/components";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
// @ts-ignore
import FlagEUR from "@/assets/images/flag_eur.png";
// @ts-ignore
import FlagUSA from "@/assets/images/flag_usa.png";
// @ts-ignore
import FlagGBP from "@/assets/images/flag_uk.png";

type Props = {
  currency: any;
  handleCurrencyChange: (currency: string) => void;
  currentCurrency: string;
};

export function CurrencyOption({
  handleCurrencyChange,
  currency,
  currentCurrency,
}: Props) {
  const [focus, setFocus] = useState(false);

  return (
    <Pressable
      onPress={() => handleCurrencyChange(currency.short)}
      onPressIn={() => setFocus(true)}
      onPressOut={() => setFocus(false)}
      style={[styles.currencyOption, focus && styles.focus]}
      key={currency.short}
    >
      <Image
        source={
          currency.flag === "flag_eur"
            ? FlagEUR
            : currency.flag === "flag_usd"
            ? FlagUSA
            : FlagGBP
        }
        style={styles.flag}
        resizeMode="contain"
      />
      <View style={styles.textWrapper}>
        <CustomText style={styles.currName}>{currency.name}</CustomText>
        <CustomText style={styles.currShort}>{currency.short}</CustomText>
      </View>
      <View>
        {currentCurrency === currency.short ? (
          <AntDesign
            name="checkcircle"
            size={13}
            color="#71b0fd"
            style={{ paddingRight: 6 }}
          />
        ) : (
          <Entypo name="chevron-small-right" size={24} color="#647184" />
        )}
      </View>
    </Pressable>
  );
}
