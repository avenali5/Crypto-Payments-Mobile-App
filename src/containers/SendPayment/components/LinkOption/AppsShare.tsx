import React from "react";
import { Image, Pressable, Share, View } from "react-native";
import { styles } from "./LinkOption.style";
import { CustomText } from "@/src/common/components";
import ShareIcon from "@/assets/icons/share.png";
import { currencyStore, dialogStore } from "@/src/store";

type Props = {
  setDialog: (value: boolean) => void;
};

export function AppsShare({ setDialog }: Props) {
  const { setDialogSubtitle } = dialogStore();
  const { paymentURL } = currencyStore();

  const successShare = () => {
    setDialogSubtitle("Your payment request has been shared successfully");
    setTimeout(() => {
      setDialog(true);
    }, 1000);
  };

  const handleShare = async () => {
    try {
      const result = await Share.share({
        title: "App link",
        message: `Hi!\n\nHere's a Bitnovo payment request.\n${paymentURL}\n\nGreetings!`,
        url: paymentURL,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          successShare();
        }
      }
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
            Share with apps
          </CustomText>
        </View>
      </View>
    </Pressable>
  );
}
