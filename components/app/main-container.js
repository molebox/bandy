/** @jsx jsx */
import { jsx } from "theme-ui-native";
import { View } from "react-native";

const MainContainer = ({ children }) => (
  <View
    sx={{
      flex: 1,
      backgroundColor: "background",
      padding: 1,
    }}
  >
    {children}
  </View>
);

export default MainContainer;
