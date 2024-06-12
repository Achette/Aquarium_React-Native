import { View, Image } from 'react-native';
import { Text } from '@rneui/themed';
import { ItemControlButtonProps } from '../../types';
import { PowerButton } from '../';
import { S } from './styles';


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
