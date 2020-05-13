// import * as React from "react";
// import LottieView from 'lottie-react-native';

// const Logo = () => {
//     return (
//         <LottieView style={{width: 600, height: 450}} source={require('../../assets/lottie-face.json')} autoPlay loop />
//     );
// }

// export default Logo;

import * as React from "react";
import { Image } from "react-native";

const Logo = () => {
  return <Image source={require("../../assets/images/bandy-logo.png")} />;
};

export default Logo;
