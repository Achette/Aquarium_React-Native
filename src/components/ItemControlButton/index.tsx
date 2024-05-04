import { S } from './styles';
import { View, Image } from 'react-native';
import { Text } from '@rneui/themed';
import { PowerButton } from '../PowerButton';


type ItemControlButtonProps = {
  icon: any;
  title: string;
  onPress: any;
  isSelected: boolean;
}

export const ItemControlButton = ({ icon, title, onPress, isSelected=false }:ItemControlButtonProps) => {
  
  let selectionOpacity = isSelected ? 1 : 0.4;

  return (
    <View style={[S.container, {opacity: selectionOpacity}]}>
      <View style={S.titleAndIcon}>
        <Image source={icon} style={S.icon}/>
        <Text style={S.title}>{title}</Text>
      </View>
      <PowerButton size={22} onPress={onPress}/>
    </View>
  );
};
