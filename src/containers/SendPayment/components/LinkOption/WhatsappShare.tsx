import React, { useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  Linking,
  Pressable,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./LinkOption.style";
import { CustomText } from "@/src/common/components";
import WSP from "@/assets/icons/whatsapp.png";
import Entypo from "@expo/vector-icons/Entypo";
import { currencyStore, dialogStore } from "@/src/store";

type Props = {
  countryCode: string;
  setModal: (val: boolean) => void;
  setDialog: (val: boolean) => void;
};

export function WhatsappShare({ countryCode, setModal, setDialog }: Props) {
  const [active, setActive] = useState(false);
  const [focus, setFocus] = useState(false);
  const [phone, setPhone] = useState("");
  const { setDialogSubtitle } = dialogStore();
  const { paymentURL } = currencyStore();

  const handlePress = () => {
    setActive(true);
  };

  const handleSend = () => {
    Linking.openURL(
      `whatsapp://send?text=Hola!\n\nTe envío una solicitud de pago de Bitnovo.\n${paymentURL}\n\nSaludos!&phone=${countryCode}${phone}`
    )
      .then(() => {
        Keyboard.dismiss();
        setPhone("");
        setDialogSubtitle(
          "Tu solicitud de pago ha sido enviada con éxito por WhatsApp."
        );
        setTimeout(() => {
          setActive(false);
          setDialog(true);
        }, 1000);
      })
      .catch(() => {
        Alert.alert("Error", "Whatsapp no está instalado en su dispositivo");
      });
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <View style={[styles.wrapper, focus && styles.wrapper.focus]}>
        <Image source={WSP} style={styles.icon} />
        <View>
          {active ? (
            <View style={styles.actionWrapper}>
              <View style={styles.inputWrapper}>
                <Pressable
                  style={styles.prefixPicker}
                  onPress={() => setModal(true)}
                >
                  <CustomText>{countryCode}</CustomText>
                  <Entypo name="chevron-small-down" size={24} color="black" />
                </Pressable>
                <TextInput
                  keyboardType="numeric"
                  placeholder="300 678 9087"
                  onFocus={() => setFocus(true)}
                  onBlur={() => setFocus(false)}
                  onChangeText={(newPhone) => {
                    setPhone(newPhone);
                  }}
                  style={{ fontFamily: "Mulish-Regular", width: "80%" }}
                />
              </View>
              <TouchableOpacity
                onPress={handleSend}
                style={[styles.cta, phone.length === 0 && styles.cta.disabled]}
                disabled={phone.length === 0}
              >
                <CustomText style={styles.cta.label}>Enviar</CustomText>
              </TouchableOpacity>
            </View>
          ) : (
            <CustomText style={styles.label}>
              Enviar a número de Whatsapp
            </CustomText>
          )}
        </View>
      </View>
    </Pressable>
  );
}
