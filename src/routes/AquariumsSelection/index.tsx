import { View, Alert } from 'react-native';
import { Text } from '@rneui/base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserBar, AquariumsList, ActionButton, Loading } from '../../components';
import { useLoadAquariums } from '../../hooks';
import { useAquarium } from '../../context'
import { Icons } from '../../theme';
import { S } from './styles';


export default function AquariumsSelection({navigation}:any) {
  const { isLoading } = useLoadAquariums();
  const { setToken, aquariumsList } = useAquarium();

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

      {isLoading ? (
        <Loading text='Carregando seu(s) aquário(s)...' />
      ) : (
        <>
          {aquariumsList.length === 0 ? (
            <View style={S.noAquariums}>
              <Text style={S.noAquariumsText}>Nenhum aquário cadastrado 😕</Text>
            </View>
          ) : (
            <AquariumsList
              navigation={navigation}
              data={aquariumsList}
            />
          )}
          <View style={S.bottomBar}>
            <ActionButton
              icon={Icons.addAquariumButton}
              title='Novo Aquário'
              onPress={() => navigation.navigate('NewAquarium')}
            />
          </View>
        </>
      )}
    </View>
  );
};
