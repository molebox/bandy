import * as React from "react";
import {
  Button,
  Card as PaperCard,
  Paragraph,
  useTheme,
  Snackbar,
} from "react-native-paper";
import { View } from "react-native";
import * as MailComposer from "expo-mail-composer";

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
  const { name, email, phone } = owner;
  const { colors } = useTheme();
  const [mailState, setMailState] = React.useState("");
  const [snackVisible, setSnackVisible] = React.useState(false);

  const sendEmail = () => {
    MailComposer.composeAsync({
      recipients: [email],
      subject: `Bandy: ${title}`,
      body: "",
    })
      .then((res) => {
        setSnackVisible(true);
        setMailState(`Successfully sent email to ${name}`);
      })
      .catch((error) => {
        setSnackVisible(true);
        setMailState(`Error sending email to ${name}`);
      });
  };

  const dismissSnackbar = () => setMailSent(false);

  return (
    <>
      <PaperCard
        elevation={5}
        style={{
          padding: 5,
          marginBottom: 20,
          marginRight: 10,
          marginLeft: 10,
          backgroundColor: colors.primary,
        }}
      >
        <PaperCard.Title
          title={title}
          titleStyle={{ color: colors.background }}
        />
        <PaperCard.Content>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Paragraph
              style={{
                marginBottom: 10,
                fontWeight: "bold",
                color: colors.background,
              }}
            >
              {location} -{" "}
            </Paragraph>
            <Paragraph style={{ marginBottom: 10, color: colors.background }}>
              {name}
            </Paragraph>
          </View>
          <Paragraph style={{ marginBottom: 10, color: colors.background }}>
            Posted: {date}
          </Paragraph>
          <Paragraph style={{ marginBottom: 10, color: colors.background }}>
            {description}
          </Paragraph>
        </PaperCard.Content>
        <PaperCard.Cover
          style={{ marginBottom: 10, marginTop: 10 }}
          source={{ uri: photo }}
        />

        <PaperCard.Actions style={{ justifyContent: "space-evenly" }}>
          {contactByEmail ? (
            <Button
              dark
              icon="email"
              style={{ backgroundColor: colors.background, padding: 2 }}
              mode="contained"
              onPress={sendEmail}
            >
              Email
            </Button>
          ) : null}
          {contactByPhone ? (
            <Button
              dark
              icon="phone"
              style={{ backgroundColor: colors.background, padding: 2 }}
              mode="contained"
            >
              Call
            </Button>
          ) : null}
        </PaperCard.Actions>
      </PaperCard>
      <Snackbar
        visible={snackVisible}
        onDismiss={dismissSnackbar}
        style={{ backgroundColor: colors.secondary }}
        action={{
          label: "Undo",
          onPress: () => {
            // Do something
          },
        }}
      >
        {mailState}
      </Snackbar>
    </>
  );
};

export default Card;
