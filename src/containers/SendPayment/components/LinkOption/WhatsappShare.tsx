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
      `whatsapp://send?text=Hi!\n\nHere's a Bitnovo payment request.\n${paymentURL}\n\nGreetings!&phone=${countryCode}${phone}`
    )
      .then(() => {
        Keyboard.dismiss();
        setPhone("");
        setDialogSubtitle(
          "Your payment request has been sent successfully via Whatsapp"
        );
        setTimeout(() => {
          setActive(false);
          setDialog(true);
        }, 1000);
      })
      .catch(() => {
        Alert.alert("Error", "Whatsapp not installed");
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
                <CustomText style={styles.cta.label}>Send</CustomText>
              </TouchableOpacity>
            </View>
          ) : (
            <CustomText style={styles.label}>
              Send to Whatsapp number
            </CustomText>
          )}
        </View>
      </View>
    </Pressable>
  );
}
