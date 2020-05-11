/** @jsx jsx */
import { jsx } from "theme-ui-native";
import { View } from "react-native";
import { TextRegular } from "./text-regular";

const ListItem = (props) => {
  console.log({ props });
  const {
    name,
    location,
    description,
    swapped,
    date,
    contactByPhone,
    contactByEmail,
    owner,
  } = props;
  const ownedBy = ({ name, email, phone } = owner);

  return (
    <View
      sx={{
        flex: 1,
        border: 2,
        borderColor: "primary",
        borderRadius: 3,
        padding: 4,
      }}
    >
      <TextRegular>{name}</TextRegular>
      <TextRegular>{description}</TextRegular>
      <TextRegular>{location}</TextRegular>
    </View>
  );
};

export default ListItem;
