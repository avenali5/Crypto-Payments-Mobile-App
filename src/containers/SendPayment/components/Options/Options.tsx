import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./Options.style";
import { BitnovoShare } from "../LinkOption/BitnovoShare";
import { WhatsappShare } from "../LinkOption/WhatsappShare";
import { EmailShare } from "../LinkOption/EmailShare";
import { AppsShare } from "../LinkOption/AppsShare";
import { ModalCustom } from "@/src/common/components";
import CountryPicker from "../CountryPicker/CountryPicker";

type Props = {
  setDialog: (value: boolean) => void;
};

export function Options({ setDialog }: Props) {
  const [visible, setVisible] = useState(false);
  const [countryCode, setCountryCode] = useState("+33");

  return (
    <View style={styles.container}>
      <BitnovoShare />
      <EmailShare />
      <WhatsappShare
        setModal={setVisible}
        countryCode={countryCode}
        setDialog={setDialog}
      />
      <AppsShare />

      <ModalCustom
        isVisible={visible}
        closeModal={() => {
          setVisible(false);
        }}
      >
        <CountryPicker
          countryCode={countryCode}
          setCountryCode={setCountryCode}
          setModal={setVisible}
        />
      </ModalCustom>
    </View>
  );
}
