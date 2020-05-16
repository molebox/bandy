const initAuth = require("./index");
import {
  FAUNA_SERVER,
  FAUNA_ACCESS_SECRET,
  FAUNA_REFRESH_SECRET,
} from "react-native-dotenv";

const FaunaAuth = initAuth({
  dbSecret: FAUNA_SERVER,
  accessSecret: FAUNA_ACCESS_SECRET,
  refreshSecret: FAUNA_REFRESH_SECRET,
  tokenDuration: 1000 * 60 * 15,
});

export default FaunaAuth;
