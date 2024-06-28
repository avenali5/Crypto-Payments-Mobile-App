import React from "react";
import { View } from "react-native";
import { styles } from "./Header.style";
import { BackArrow, ChangeCurrency, CustomText } from "..";

type Props = {
  title: string;
  hasDropdown?: boolean;
  hasBackArrow?: boolean;
  noShadow?: boolean;
};

export function Header({ title, hasDropdown, hasBackArrow, noShadow }: Props) {
  return (
    <View style={[styles.container, !noShadow && styles.withShadow]}>
      {hasBackArrow ? <BackArrow /> : <View style={{ width: 66 }} />}
      <CustomText style={styles.title}>{title}</CustomText>
      {hasDropdown ? <ChangeCurrency /> : <View style={{ width: 66 }} />}
    </View>
  );
}
