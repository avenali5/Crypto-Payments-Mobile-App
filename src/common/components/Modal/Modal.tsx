import React from "react";
import { Modal, Pressable, View } from "react-native";
import { styles } from "./Modal.style";

type IModalProps = {
  closeModal: () => void;
  isVisible: boolean;
  children: any;
  hasX?: boolean;
};

export function ModalCustom({
  closeModal,
  isVisible,
  children,
  hasX,
}: IModalProps) {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={isVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.boxWrapper}>
        <View style={styles.box}>
          {hasX && (
            <Pressable
              onPress={closeModal}
              style={styles.closeBtnContainer}
            ></Pressable>
          )}
          {children}
        </View>
      </View>
    </Modal>
  );
}
