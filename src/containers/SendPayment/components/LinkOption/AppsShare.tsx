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
import ShareIcon from "@/assets/icons/share.png";
import { dialogStore } from "@/src/store";

type Props = {
  setDialog: (value: boolean) => void;
};

export function AppsShare({ setDialog }: Props) {
  const { setDialogSubtitle } = dialogStore();

  const successShare = () => {
    setDialogSubtitle("Tu solicitud de pago ha sido enviada con éxito.");
    setTimeout(() => {
      setDialog(true);
    }, 1000);
  };

  const handleShare = async () => {
    try {
      const result = await Share.share({
        title: "App link",
        message:
          "Please install this app and stay safe , AppLink :https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en",
        url: "https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          console.log("compartio");
          successShare();
        } else {
          // shared
          console.log("compartio tmb?");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("no compartio");
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
            Compartir con otras aplicaciones
          </CustomText>
        </View>
      </View>
    </Pressable>
  );
}
