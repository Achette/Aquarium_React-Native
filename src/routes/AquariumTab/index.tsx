import { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelectedAquarium, useAquariumData } from '../../hooks';
import { TopBar, ConfigDisplay, DataDisplay, ActionButton } from '../../components';
import { Icons } from '../../theme';
import { S } from './styles';


export default function AquariumTab({navigation}:any) {
  const route = useRoute();
  const { aquarium }:any = route.params;

  const [ lastCleaning, setLastCleaning ] = useState('Sem registro');
  const [ lastFeeding, setLastFeeding ] = useState('Sem registro');

  const { selectedAquarium, isLoading }:any = useSelectedAquarium(aquarium.id);

  useEffect(() => {
    const loadActionButtonsValues = async () => {
      try {
        const actionButtonsValues = await AsyncStorage.getItem('actionButtonsValues');
        if (actionButtonsValues) {
          const parsedValues = JSON.parse(actionButtonsValues);
          const aquariumValues = parsedValues[selectedAquarium.id];
          if (aquariumValues) {
            setLastCleaning(aquariumValues.lastCleaning);
            setLastFeeding(aquariumValues.lastFeeding);
          }
        }
      } catch (error) {
        console.error('Erro ao carregar os valores do AsyncStorage:', error);
      }
    };

    if (selectedAquarium) {
      loadActionButtonsValues();
    }
  }, [selectedAquarium]);

  const saveActionButtonsValues = async (cleaning: string, feeding: string) => {
    try {
      const actionButtonsValues = await AsyncStorage.getItem('actionButtonsValues');
      const parsedValues = actionButtonsValues ? JSON.parse(actionButtonsValues) : {};
      parsedValues[selectedAquarium.id] = { lastCleaning: cleaning, lastFeeding: feeding };
      await AsyncStorage.setItem('actionButtonsValues', JSON.stringify(parsedValues));
    } catch (error) {
      console.error('Erro ao salvar os valores no AsyncStorage:', error);
    }
  };

  const formatDateTime = () => {
    const currentDateTime = new Date();
    const day = String(currentDateTime.getDate()).padStart(2, '0');
    const month = String(currentDateTime.getMonth() + 1).padStart(2, '0');
    const year = String(currentDateTime.getFullYear()).slice(-2);
    const hours = String(currentDateTime.getHours()).padStart(2, '0');
    const minutes = String(currentDateTime.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} | ${hours}:${minutes}`;
  };

  const handleCleanPress = () => {
    const currentTime = formatDateTime();
    setLastCleaning(currentTime);
    saveActionButtonsValues(currentTime, lastFeeding);
  };

  const handleFeedPress = () => {
    const currentTime = formatDateTime();
    setLastFeeding(currentTime);
    saveActionButtonsValues(lastCleaning, currentTime);
  };

  if (!aquarium || isLoading || !selectedAquarium) return null;

  const { icon, title, configs, data }:any = useAquariumData(selectedAquarium, lastCleaning, lastFeeding);

  return (
    <View style={S.container}>
      <TopBar 
        title={title}
        icon={icon}
        hasBackButton={true}
        navigation={navigation}
      />

      <View style={S.configsDisplay}>
        {configs.map((config:any, index:any) => (
          <ConfigDisplay
            key={index}
            content={config.content}
            icon={config.icon}
          />
        ))}
      </View>

      <View style={S.dataDisplay}>
        {data.map((data:any, index:any) => (
          <DataDisplay
            key={index}
            title={data.title}
            value={data.value}
            icon={data.icon}
          />
        ))}
      </View>

      <View style={S.buttonsBar}>
        <ActionButton
          icon={Icons.cleanButton}
          title='Limpar'
          onPress={() => {
            Alert.alert('Limpar', 'Deseja registrar a limpeza?', [
              { text: 'Cancelar', style: 'cancel' },
              { text: 'Registrar', onPress: handleCleanPress }
            ]);
          }}
        />
        <ActionButton
          icon={Icons.foodButton}
          title='Alimentar'
          onPress={() => {
            Alert.alert('Alimentar', 'Deseja realizar a alimentação?', [
              { text: 'Cancelar', style: 'cancel' },
              { text: 'Registrar', onPress: handleFeedPress }
            ]);
          }}
        />
      </View>
  </View>
  );
};
