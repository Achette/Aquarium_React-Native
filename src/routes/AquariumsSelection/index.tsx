import { useState, useEffect, useContext } from 'react';
import { View, Alert } from 'react-native';
import { Text } from '@rneui/base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { UserBar, AquariumsList, ActionButton, Loading } from '../../components';
import { AquariumContext } from '../../context'
import { Icons } from '../../theme';
import { S } from './styles';


export default function AquariumsSelection({navigation}:any) {
  const [ isLoading, setIsLoading ] = useState(true);
  const { token, setToken, aquariumsList, setAquariumsList } = useContext(AquariumContext);

  const headers = { 'Authorization': `${token}` };

  useEffect(() => {
    const loadAquariums = async () => {
      try {
        const response = await axios.get(`${process.env.BASE_URL}/aquarium`, { headers });

        const aquariumsData = await response.data.map((aquarium:any) => ({
          id: aquarium.id,
          name: aquarium.name,
          format_aquarium: aquarium.format_aquarium,
          material: aquarium.material,
          thickness: aquarium.thickness,
          height: aquarium.height,
          voltage: aquarium.voltage,
          capacity: aquarium.capacity,
        }));

        console.log(`Aquarios carregados: ${aquariumsData.length}`);
        console.log(`Aquarios: ${JSON.stringify(aquariumsData)}`);

        setAquariumsList(aquariumsData);
      } catch (e) {
        console.log(`Erro ao carregar aquários: ${e}`);
      } finally {
        setIsLoading(false);
      }
    };

    loadAquariums();
  }, []);

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
