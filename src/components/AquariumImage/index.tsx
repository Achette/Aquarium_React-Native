import { Image } from 'react-native';
import { Icons } from '../../theme';
import { S } from './styles';


export const AquariumImage = () => {
  return (
    <Image
      source={Icons.aquariumImg}
      style={S.image}
    />
  );
};
