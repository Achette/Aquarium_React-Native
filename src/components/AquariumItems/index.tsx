import { S } from './styles';
import { Text, Image } from 'react-native';
import { Button } from '@rneui/themed';


type AquariumItemsProps = {
  item: any;
  onPress: any;
};

export const AquariumItems = ({item, onPress}:AquariumItemsProps) => {

  let icon;
  switch (item.icon) {
    case 'circular':
      icon = require('../../assets/icons/shapes/circular.png');
      break;
    case 'hexagonal':
      icon = require('../../assets/icons/shapes/hexagonal.png');
      break;
    default:
      icon = require('../../assets/icons/shapes/rectangular.png');
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
