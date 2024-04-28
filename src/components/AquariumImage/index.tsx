import { S } from './styles';
import { Image } from 'react-native';


export const AquariumImage = () => {
  
  const AquariumPNG = require('../../assets/img/aquarium.png');
  
  return (
    <Image
      source={AquariumPNG}
      style={S.image}
    />
  );
};
