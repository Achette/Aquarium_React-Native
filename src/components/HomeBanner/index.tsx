import { Image } from 'react-native';


export const HomeBanner = () => {
  
  const HomeBannerPNG = require('../../assets/img/homebanner.png');
  
  return (
    <Image
      source={HomeBannerPNG}
      style={{ width: "100%" }}
    />
  );
};
