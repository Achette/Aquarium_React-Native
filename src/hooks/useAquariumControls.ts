import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { useAquarium } from '../context';
import { Icons } from '../theme';


export function useAquariumControls() {
  const route = useRoute();

  const { aquarium }: any = route.params;
  const { aquariumsList } = useAquarium();
  const [selectedAquarium, setSelectedAquarium] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [hasPump, setHasPump] = useState(true);
  const [hasFeeder, setHasFeeder] = useState(true);
  const [hasThermostat, setHasThermostat] = useState(true);
  const [hasFilter, setHasFilter] = useState(true);
  const [hasLedLights, setHasLedLights] = useState(true);

  useEffect(() => {
    const aquariumData = aquariumsList.find((a: any) => a.id === aquarium.id);
    if (aquariumData) {
      setSelectedAquarium(aquariumData);
      setIsLoading(false);
    }
  }, [aquariumsList]);

  const accessoriesMap: any = {
    'Bombinha': { title: 'Bombinha', icon: Icons.pump, onPress: () => setHasPump(!hasPump), isSelected: hasPump },
    'Alimentador automático': { title: 'Alimentador', icon: Icons.feeder, onPress: () => setHasFeeder(!hasFeeder), isSelected: hasFeeder },
    'Termostato / Aquecedor': { title: 'Termostato', icon: Icons.thermostat, onPress: () => setHasThermostat(!hasThermostat), isSelected: hasThermostat },
    'Filtro': { title: 'Filtro', icon: Icons.filter, onPress: () => setHasFilter(!hasFilter), isSelected: hasFilter },
    'Luz LED': { title: 'Luzes de LED', icon: Icons.ledLights, onPress: () => setHasLedLights(!hasLedLights), isSelected: hasLedLights },
  };

  const controls: any[] = [];
  if (selectedAquarium && selectedAquarium.accessories && selectedAquarium.accessories.length > 0) {
    selectedAquarium.accessories.forEach((accessory: any) => {
      if (accessory.name === 'Plantas naturais') return;
      controls.push(accessoriesMap[accessory.name]);
    });
  }

  return { isLoading, selectedAquarium, controls };
}
