import React from "react";
import { View } from "react-native";
import { styles } from "./Header.style";
import { BackArrow, ChangeCurrency, CustomText } from "..";

type Props = {
  title: string;
  hasDropdown?: boolean;
  hasBackArrow?: boolean;
  noShadow?: boolean;
  onBackPress?: () => void;
};

export function Header({
  title,
  hasDropdown,
  hasBackArrow,
  noShadow,
  onBackPress,
}: Props) {
  return (
    <View style={[styles.container, !noShadow && styles.withShadow]}>
      {hasBackArrow ? (
        <BackArrow onBackPress={onBackPress} />
      ) : (
        <View style={{ width: 66 }} />
      )}
      <CustomText style={styles.title}>{title}</CustomText>
      {hasDropdown ? <ChangeCurrency /> : <View style={{ width: 66 }} />}
    </View>
  );
}
