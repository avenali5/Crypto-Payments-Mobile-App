import { currencyStore } from "@/src/store";
import React from "react";
import { Image, View } from "react-native";
import { CustomText } from "../CustomText/CustomText";
import { styles } from "./ChangeCurrency.style";
// import ChevronDown from "@/assets/icons/chevron_down.svg";
import { Link } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";

export function ChangeCurrency() {
  const { currentCurrency } = currencyStore();

  return (
    <Link href="/change-currency" style={styles.wrapper}>
      <View style={styles.button}>
        <CustomText>{currentCurrency}</CustomText>
        <Entypo name="chevron-small-down" size={24} color="black" />
      </View>
    </Link>
  );
}

export default ChangeCurrency;
