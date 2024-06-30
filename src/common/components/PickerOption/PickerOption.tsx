import React, { useState } from "react";
import { Image, ImageSourcePropType, Pressable, View } from "react-native";
import { styles } from "./PickerOption.style";
import { CustomText } from "@/src/common/components";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  title: string;
  subtitle: string;
  flag: ImageSourcePropType;
  handleSelect: (val: string) => void;
  compareSubtitle?: boolean;
  currentSelected: string;
};

export function PickerOption({
  handleSelect,
  title,
  subtitle,
  flag,
  currentSelected,
  compareSubtitle,
}: Props) {
  const [focus, setFocus] = useState(false);
  const dataToCompare = compareSubtitle ? title : subtitle;

  return (
    <Pressable
      onPress={() => handleSelect(compareSubtitle ? title : subtitle)}
      onPressIn={() => setFocus(true)}
      onPressOut={() => setFocus(false)}
      style={[styles.currencyOption, focus && styles.focus]}
      key={subtitle}
    >
      <Image source={flag} style={styles.flag} resizeMode="contain" />
      <View style={styles.textWrapper}>
        <CustomText isBold style={styles.currName}>
          {title}
        </CustomText>
        <CustomText style={styles.currShort}>
          {subtitle.length >= 29 ? `${subtitle.substring(0, 29)}...` : subtitle}
        </CustomText>
      </View>
      <View>
        {dataToCompare === currentSelected ? (
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
