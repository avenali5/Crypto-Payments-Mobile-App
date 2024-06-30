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
    setDialogSubtitle("Tu solicitud de pago ha sido enviada con éxito.");
    setTimeout(() => {
      setDialog(true);
    }, 1000);
  };

  const handleShare = async () => {
    try {
      const result = await Share.share({
        title: "App link",
        message: `Hola!\n\nTe envío una solicitud de pago de Bitnovo.\n${paymentURL}\n\nSaludos`,
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
            Compartir con otras aplicaciones
          </CustomText>
        </View>
      </View>
    </Pressable>
  );
}
