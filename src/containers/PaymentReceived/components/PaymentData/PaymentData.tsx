import React from "react";
import { Image, View } from "react-native";
import { styles } from "./PaymentData.style";
import Check from "@/assets/icons/success_check.png";
import Calendar from "@/assets/icons/calendar.png";
import Cripto from "@/assets/icons/coin.png";
import Quantity from "@/assets/icons/moneys.png";
import Reference from "@/assets/icons/reference.png";
import { CustomText } from "@/src/common/components";
import { PaymentDataProps } from "@/src/common/types";

type Props = {
  params: PaymentDataProps;
};

export function PaymentData({ params }: Props) {
  const formattedDate = new Date(params?.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={Check} style={styles.check} />
        <CustomText isBold style={styles.title}>
          ¡Pago recibido exitosamente!
        </CustomText>
        <View style={styles.idWrapper}>
          <CustomText style={styles.idText} isBold>
            #{params?.identifier?.slice(0, 18)}...
          </CustomText>
        </View>
      </View>
      <View>
        <View style={styles.dataItem}>
          <Image source={Quantity} style={styles.icon} />
          <CustomText style={styles.label}>Cantidad</CustomText>
          <CustomText style={styles.value} isBold>
            {params.total} {params.fiat}
          </CustomText>
        </View>
        <View style={styles.dataItem}>
          <Image source={Calendar} style={styles.icon} />
          <CustomText style={styles.label}>Pagado en</CustomText>
          <CustomText style={styles.value} isBold>
            {formattedDate}
          </CustomText>
        </View>
        <View style={styles.dataItem}>
          <Image source={Cripto} style={styles.icon} />
          <CustomText style={styles.label}>Criptomoneda</CustomText>
          <CustomText style={styles.value} isBold>
            {params.cripto}
          </CustomText>
        </View>
        <View style={styles.dataItem}>
          <Image source={Reference} style={styles.icon} />
          <CustomText style={styles.label}>Referencia</CustomText>
          <CustomText style={styles.value} isBold>
            {params.reference || "-"}
          </CustomText>
        </View>
      </View>
    </View>
  );
}
