import * as React from "react";
import {
  Button,
  Card as PaperCard,
  Paragraph,
  useTheme,
} from "react-native-paper";
import { View } from "react-native";

const Card = (props) => {
  const {
    name: title,
    location,
    description,
    swapped,
    date,
    photo,
    contactByPhone,
    contactByEmail,
    owner,
  } = props;
  console.log({ owner });
  const { name, email, phone } = owner;
  const { colors } = useTheme();

  return (
    <PaperCard
      elevation={5}
      style={{
        padding: 5,
        marginBottom: 20,
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: colors.background,
      }}
    >
      <PaperCard.Title title={title} style={{ fontWeight: "bold" }} />
      <PaperCard.Content>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Paragraph style={{ marginBottom: 10, fontWeight: "bold" }}>
            {location} -{" "}
          </Paragraph>
          <Paragraph style={{ marginBottom: 10 }}>{name}</Paragraph>
        </View>
        <Paragraph style={{ marginBottom: 10 }}>Posted: {date}</Paragraph>
        <Paragraph style={{ marginBottom: 10 }}>{description}</Paragraph>
      </PaperCard.Content>
      <PaperCard.Cover
        style={{ marginBottom: 10, marginTop: 10 }}
        source={{ uri: photo }}
      />

      <PaperCard.Actions style={{ justifyContent: "space-evenly" }}>
        {contactByEmail ? (
          <Button
            icon="email"
            style={{ backgroundColor: colors.secondary, padding: 2 }}
            mode="contained"
          >
            Email
          </Button>
        ) : null}
        {contactByPhone ? (
          <Button
            icon="phone"
            style={{ backgroundColor: colors.secondary, padding: 2 }}
            mode="contained"
          >
            Call
          </Button>
        ) : null}
      </PaperCard.Actions>
    </PaperCard>
  );
};

export default Card;
