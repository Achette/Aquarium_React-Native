import { Image } from 'react-native';


export const LogInBanner = () => {
  
  const LogInBannerPNG = require('../../assets/img/loginbanner.png');
  
  return (
    <Image
      source={LogInBannerPNG}
      style={{ width: "100%", resizeMode: 'stretch'}}
    />
  );
};
