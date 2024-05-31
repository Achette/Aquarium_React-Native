import { S } from './styles';
import { Icons } from '../../theme/Icons';
import { Text, Image } from 'react-native';
import { Button } from '@rneui/themed';


type AquariumItemsProps = {
  item: any;
  onPress: any;
};

const iconMap: Record<string, any> = {
  'Curvo': Icons.circularShape,
  'Sextavado': Icons.hexagonalShape,
  'Retangular': Icons.rectangularShape,
};

export const AquariumItems = ({item, onPress}:AquariumItemsProps) => {

  const icon = iconMap[item.format_aquarium] || Icons.rectangularShape;

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
