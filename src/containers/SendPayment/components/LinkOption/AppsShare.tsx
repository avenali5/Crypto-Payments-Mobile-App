import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Share,
  View,
} from "react-native";
import { styles } from "./LinkOption.style";
import { CustomText } from "@/src/common/components";
// @ts-ignore
import ShareIcon from "@/assets/icons/share.png";

export function AppsShare() {
  const handleShare = async () => {
    try {
      const result = await Share.share({
        title: "App link",
        message:
          "Please install this app and stay safe , AppLink :https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en",
        url: "https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en",
      });
      // if (result.action === Share.sharedAction) {
      //   if (result.activityType) {
      //     // shared with activity type of result.activityType
      //   } else {
      //     // shared
      //   }
      // } else if (result.action === Share.dismissedAction) {
      //   // dismissed
      // }
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <Pressable style={styles.container} onPress={handleShare}>
      <View style={styles.wrapper}>
        <Image source={ShareIcon} style={styles.icon} />
        <View>
          <CustomText style={styles.label}>
            Compartir con otras aplicaciones
          </CustomText>
        </View>
      </View>
    </Pressable>
  );
}
