/** @jsx jsx */
import { jsx } from "theme-ui-native";
import { View, FlatList } from "react-native";
import ListItem from "./list-item";

const List = (data) => {
  console.log("LIST DATA: ", data);
  console.log(Array.isArray(data));
  return (
    <View
      sx={{
        flex: 1,
      }}
    >
      <FlatList data={data} renderItem={({ item }) => <ListItem {...item} />} />
    </View>
  );
};

export default List;
