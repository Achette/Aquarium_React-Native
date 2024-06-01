import { S } from './styles';
import { Icons } from '../../theme/Icons';
import { useAquarium } from '../../context';
import { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { TopBar } from '../../components/TopBar';
import { ConfigDisplay } from '../../components/ConfigDisplay';
import { DataDisplay } from '../../components/DataDisplay';
import { ActionButton } from '../../components/ActionButton';
import { Loading } from '../../components/Loading';


export default function AquariumTab({navigation}:any) {
  const route = useRoute();
  const { aquarium } = route.params as { aquarium: any };
  const { aquariumsList } = useAquarium();
  const [ selectedAquarium, setSelectedAquarium ] = useState<any>(null);
  const [ isLoading, setIsLoading ] = useState(true);
  
  useEffect(() => {
    const aquariumData = aquariumsList.find((a: any) => a.id === aquarium.id);
    if (aquariumData) {
      setSelectedAquarium(aquariumData);
      setIsLoading(false);
    }
  }, [aquariumsList]);

  const iconMap: Record<string, any> = {
    'Curvo': Icons.circularShape,
    'Sextavado': Icons.hexagonalShape,
    'Retangular': Icons.rectangularShape,
  };

  const petMap: Record<string, any> = {
    'Peixe': Icons.fish,
    'Tartaruga': Icons.turtle,
    'Cobra': Icons.snake,
    'Sapo': Icons.frog,
  };

  const sensorMap: Record<string, any> = {
    'Temperatura': Icons.temperatureData,
    'Saturação': Icons.saturationData,
    'pH': Icons.phData,
    'Nível de água': Icons.waterLevelData,
    'Luminosidade': Icons.luminosityData,
  };

  if (isLoading) {
    return <Loading text="Carregando aquário..." />;
  }

  const icon = iconMap[selectedAquarium.format_aquarium] || Icons.rectangularShape;
  const title = selectedAquarium.name;

  let configs = [
    { icon: Icons.material, content: selectedAquarium.material },
    { icon: Icons.voltage, content: selectedAquarium.voltage },
    { icon: Icons.height, content: `${selectedAquarium.height}cm` },
    { icon: Icons.thickness, content: `${selectedAquarium.thickness}mm` },
    { icon: Icons.capacity, content: `${selectedAquarium.capacity}L` },
  ];

  if (selectedAquarium.pets && selectedAquarium.pets.length > 0) {
    selectedAquarium.pets.forEach((pet: any) => {
      configs.push({ icon: petMap[pet.species], content: pet.quantity });
    });
  }

  const data = [
    { icon: Icons.lastCleaningData, title: 'Última Limpeza', value: '16/04/2024 | 12:00' },
    { icon: Icons.lastFeedingData, title: 'Última Alimentação', value: '23/04/2024 | 12:00' },
  ];

  if (selectedAquarium.sensors && selectedAquarium.sensors.length > 0) {
    selectedAquarium.sensors.forEach((sensor: any) => {
      data.push({ icon: sensorMap[sensor.metric], title: sensor.metric, value: sensor.current });
    });
  }

  return (
    <View style={S.container}>
      <TopBar 
        title={title}
        icon={icon}
        hasBackButton={true}
        navigation={navigation}
      />

      <View style={S.configsDisplay}>
        {configs.map((config, index) => (
          <ConfigDisplay
            key={index}
            content={config.content}
            icon={config.icon}
          />
        ))}
      </View>

      <View style={S.dataDisplay}>
        {data.map((data, index) => (
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
        onPress={() => {Alert.alert('Limpar', 'Pronto, limpou os cocô tudo')}}
      />
      <ActionButton
        icon={Icons.foodButton}
        title='Alimentar'
        onPress={() => {Alert.alert('Alimentar', 'Pronto, deu comida pros peixinho')}}
      />
    </View>
  </View>
  );
};
