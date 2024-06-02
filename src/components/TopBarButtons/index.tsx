import { Image, TouchableOpacity, Alert } from 'react-native';
import { Icons } from '../../theme';
import { S } from './styles';


export const BackButton = ({navigation}:any) => {
  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate('AquariumsSelection')}
      style={S.button}
    >
      <Image source={Icons.backTopBar}/>
    </TouchableOpacity>
  );
};

export const ConfigButton = () => {
  return (
    <TouchableOpacity
      onPress={() => Alert.alert('Configurações', 'Configurar configurações configuráveis')}
      style={[S.button, S.buttonRight]}
    >
      <Image source={Icons.configTopBar}/>
    </TouchableOpacity>
  );
};
