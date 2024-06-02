import { useState, useEffect } from 'react';
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
  const [ userInitials, setUserInitials ] = useState<string | null>(null);
  const user = AsyncStorage.getItem('username');

  useEffect(() => {
    const fetchUser = async () => {
      const username = await AsyncStorage.getItem('username');
      if (username) {
        setUserInitials(username.slice(0, 2).toUpperCase());
      }
    };
    fetchUser();
  }, [user]);

  const handleLogOff = () => {
    Alert.alert('LogOff', 'Deseja realmente sair?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Sair', onPress: logOff }
    ]);
  }

  const logOff = () => {
    setToken('');
    AsyncStorage.removeItem('token');
    navigation.navigate('Home');
  }

  const handleUserButton = async () => {
    const username = await AsyncStorage.getItem('username');
    Alert.alert('Oi :)', `Você está logado como "${username}"`);
  }

  return (
    <View style={S.page}>
      <UserBar
        userButtonContent={userInitials || ''}
        userButtonOnPress={handleUserButton}
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
