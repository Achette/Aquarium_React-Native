import { S } from './styles';
import { useContext } from 'react';
import { View, Alert } from 'react-native';
import { Text } from '@rneui/base';
import { UserBar } from '../../components/UserBar';
import { AquariumsList } from '../../components/AquariumsList';
import { ActionButton } from '../../components/ActionButton';
import { AquariumContext } from '../../context'
import AsyncStorage from '@react-native-async-storage/async-storage';

let aquariums = [
  { id: '1', icon: 'hexagonal', name: 'Aquário 1' },
  { id: '2', icon: 'rectangular', name: 'Aquário 2' },
  { id: '3', icon: 'circular', name: 'Aquário 3' },
];
// aquariums = [];

const addIcon = require('../../assets/icons/buttons/add.png');


function AquariumsSelection({navigation}:any) {

  const { token, setToken } = useContext(AquariumContext);

  const handleLogOff = () => {
    Alert.alert('Já vai?', 'Valeu, falou');
    setToken('');
    AsyncStorage.removeItem('token');
    navigation.navigate('Home');
  }

  return (
    <View style={S.page}>
      <UserBar
        userButtonContent="JP"
        userButtonOnPress={() => {Alert.alert('Oi :)', 'Seu pai tem boi?')}}
        logOffButtonOnPress={handleLogOff}
      />

      {aquariums.length === 0 ?
        <View style={S.noAquariums}>
          <Text style={S.noAquariumsText}>Nenhum aquário cadastrado 😕</Text>
        </View>
      :
        <AquariumsList
          navigation={navigation}
          data={aquariums}
        />
      }

      <View style={S.bottomBar}>
        <ActionButton
          icon={addIcon}
          title='Novo Aquário'
          onPress={() => navigation.navigate('NewAquarium')}
        />
      </View>
    </View>
  );
};

export default AquariumsSelection;
