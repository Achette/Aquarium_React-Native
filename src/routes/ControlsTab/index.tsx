import { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { TopBar, ItemControlButton, Loading } from '../../components';
import { useAquarium } from '../../context';
import { Icons } from '../../theme';
import { S } from './styles';


export default function ControlsTab({navigation}:any) {
  const route = useRoute();

  const { aquarium } = route.params as { aquarium: any };
  const { aquariumsList } = useAquarium();
  const [ selectedAquarium, setSelectedAquarium ] = useState<any>(null);
  const [ isLoading, setIsLoading ] = useState(true);

  const [ hasPump, setHasPump ] = useState(true);
  const [ hasFeeder, setHasFeeder ] = useState(true);
  const [ hasThermostat, setHasThermostat ] = useState(true);
  const [ hasFilter, setHasFilter ] = useState(true);
  const [ hasLedLights, setHasLedLights ] = useState(true);

  useEffect(() => {
    const aquariumData = aquariumsList.find((a: any) => a.id === aquarium.id);
    if (aquariumData) {
      setSelectedAquarium(aquariumData);
      setIsLoading(false);
    }
  }, [aquariumsList]);

  const accessoriesMap:any = {
    'Bombinha': { title: 'Bombinha', icon: Icons.pump, onPress: () => setHasPump(!hasPump), isSelected: hasPump },
    'Alimentador automático': { title: 'Alimentador', icon: Icons.feeder, onPress: () => setHasFeeder(!hasFeeder), isSelected: hasFeeder },
    'Termostato / Aquecedor': { title: 'Termostato', icon: Icons.thermostat, onPress: () => setHasThermostat(!hasThermostat), isSelected: hasThermostat },
    'Filtro': { title: 'Filtro', icon: Icons.filter, onPress: () => setHasFilter(!hasFilter), isSelected: hasFilter },
    'Luz LED': { title: 'Luzes de LED', icon: Icons.ledLights, onPress: () => setHasLedLights(!hasLedLights), isSelected: hasLedLights },
  };

  if (isLoading || !selectedAquarium) {
    return (
      <View style={S.container}>
        <Loading text="Carregando aquário..." />
      </View>
    );
  }

  let controls:any[] = []
  if (selectedAquarium.accessories && selectedAquarium.accessories.length > 0) {
    selectedAquarium.accessories.forEach((accessory: any) => {
      if (accessory.name === 'Plantas naturais') {
        return;
      }
      controls.push(accessoriesMap[accessory.name]);
    })
  }

  return (
    <View style={S.container}>
      <TopBar 
        title='Controles'
        icon={Icons.controlTabBar}
      />

      <View style={S.controlsButtonsContainer}>
        {controls.map((item:any, index:any) => (
          <ItemControlButton 
            key={index}
            icon={item.icon} 
            title={item.title} 
            onPress={item.onPress} 
            isSelected={item.isSelected}
          />
        ))}
      </View>
    </View>
  );
};
