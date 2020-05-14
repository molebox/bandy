import * as React from "react";
import {
  Modal,
  Portal,
  Text,
  Button,
  Provider,
  Card as PaperCard,
  useTheme,
} from "react-native-paper";
import { width, height } from "../../../constants/Layout";

const ItemModal = ({ modalVisible, hideModal }) => {
  const { colors } = useTheme();

  return (
    <Modal
      visible={modalVisible}
      onDismiss={hideModal}
      contentContainerStyle={{
        height: height,
        width: width,
        alignSelf: "center",
        backgroundColor: colors.accent,
      }}
    >
      <Text>New Item</Text>
      <Text>New Item</Text>
      <Text>New Item</Text>
      <Text>New Item</Text>
    </Modal>
  );
};

export default ItemModal;
