import * as React from "react";
import {
  Button,
  Card as PaperCard,
  Paragraph,
  useTheme,
} from "react-native-paper";

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
      elevation={4}
      style={{
        padding: 5,
        marginBottom: 50,
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: colors.background,
      }}
    >
      <PaperCard.Title title={title} />
      <PaperCard.Content>
        <Paragraph>{description}</Paragraph>
      </PaperCard.Content>
      <PaperCard.Cover
        style={{ marginBottom: 10, marginTop: 10 }}
        source={{ uri: photo }}
      />
      <PaperCard.Actions style={{ justifyContent: "space-between" }}>
        {contactByEmail ? (
          <Button style={{ backgroundColor: colors.primary }} mode="contained">
            Email Owner
          </Button>
        ) : null}
        {contactByPhone ? (
          <Button style={{ backgroundColor: colors.primary }} mode="contained">
            Call Owner
          </Button>
        ) : null}
      </PaperCard.Actions>
    </PaperCard>
  );
};

export default Card;
