import { S } from './styles';
import { Image, TouchableOpacity, Alert } from 'react-native';


const BackIcon = require('../../assets/icons/topbar/back.png');
const ConfigIcon = require('../../assets/icons/topbar/config.png');

export const BackButton = ({navigation}:any) => {
  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate('AquariumsSelection')}
      style={S.button}
    >
      <Image source={BackIcon}/>
    </TouchableOpacity>
  );
};

export const ConfigButton = () => {
  return (
    <TouchableOpacity
      onPress={() => Alert.alert('Configurações', 'Já pensou, configurar algo?')}
      style={[S.button, S.buttonRight]}
    >
      <Image source={ConfigIcon}/>
    </TouchableOpacity>
  );
};
