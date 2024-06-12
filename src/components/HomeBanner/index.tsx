import { Image } from 'react-native';
import { Icons } from '../../theme';


export const HomeBanner = () => {  
  return (
    <Image
      source={Icons.homeBannerImg}
      style={{ width: "100%" }}
    />
  );
};
