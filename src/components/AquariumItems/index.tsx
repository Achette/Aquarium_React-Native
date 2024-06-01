import { Text, Image } from 'react-native';
import { Button } from '@rneui/themed';
import { AquariumItemsProps } from '../../types';
import { Icons } from '../../theme';
import { S } from './styles';


const iconMap: Record<string, any> = {
  'Retangular': Icons.rectangularShape,
  'Curvo': Icons.circularShape,
  'Sextavado': Icons.hexagonalShape,
};

export const AquariumItems = ({item, onPress}:AquariumItemsProps) => {

  const icon = iconMap[item.format_aquarium];

  return (
    <Button 
      type="outline"
      buttonStyle={S.button}
      containerStyle={S.buttoncontainer}
      onPress={onPress}
    >
      <Image source={icon} />
      <Text style={S.buttonText}>{item.name}</Text>
    </Button>
  );
};
