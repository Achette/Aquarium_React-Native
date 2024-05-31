import { S } from './styles';
import { Icons } from '../../theme/Icons';
import { Text, Image } from 'react-native';
import { Button } from '@rneui/themed';


type AquariumItemsProps = {
  item: any;
  onPress: any;
};

export const AquariumItems = ({item, onPress}:AquariumItemsProps) => {

  let icon;
  switch (item.icon) {
    case 'Curvo':
      icon = Icons.circularShape;
      break;
    case 'Sextavado':
      icon = Icons.hexagonalShape;
      break;
    default:
      icon = Icons.rectangularShape;
      break;
  };

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
