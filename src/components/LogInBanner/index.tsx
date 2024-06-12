import { Image } from 'react-native';
import { Icons } from '../../theme';


export const LogInBanner = () => {
  return (
    <Image
      source={Icons.logInBannerImg}
      style={{ width: "100%", resizeMode: 'stretch'}}
    />
  );
};
