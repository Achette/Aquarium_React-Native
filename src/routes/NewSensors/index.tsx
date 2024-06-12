import { View, ScrollView } from 'react-native';
import { Text } from '@rneui/themed';
import { ItemButton, DefaultPrimaryButton, DefaultSecondaryButton } from '../../components';
import { useAquarium } from '../../context';
import { Icons } from '../../theme';
import { S } from './styles';


export default function NewSensors({navigation}:any) {

  const { 
    hasTemperatureSensor, setHasTemperatureSensor,
    hasWaterLevelSensor, setHasWaterLevelSensor,
    hasLuminositySensor, setHasLuminositySensor,
    hasPhSensor, setHasPhSensor,
    hasSaturationSensor, setHasSaturationSensor,
  } = useAquarium();

  const sensors = [
    { title: 'Temperatura', icon: Icons.temperatureSensor, onPress: () => setHasTemperatureSensor(!hasTemperatureSensor), isSelected: hasTemperatureSensor },
    { title: 'Nível da Água', icon: Icons.waterLevelSensor, onPress: () => setHasWaterLevelSensor(!hasWaterLevelSensor), isSelected: hasWaterLevelSensor },
    { title: 'Luminosidade', icon: Icons.luminositySensor, onPress: () => setHasLuminositySensor(!hasLuminositySensor), isSelected: hasLuminositySensor },
    { title: 'pH', icon: Icons.phSensor, onPress: () => setHasPhSensor(!hasPhSensor), isSelected: hasPhSensor },
    { title: 'Saturação', icon: Icons.saturationSensor, onPress: () => setHasSaturationSensor(!hasSaturationSensor), isSelected: hasSaturationSensor },
  ]

  return (
    <ScrollView>
      <View style={S.page}>
        <Text style={S.title}>Sensores</Text>

        <View style={S.sensorsButtonsContainer}>
          {sensors.map((item, index) => (
            <ItemButton 
              key={index}
              icon={item.icon} 
              title={item.title} 
              onPress={item.onPress} 
              isSelected={item.isSelected}
            />
          ))}
        </View>

        <View style={S.buttonsContainer}>
          <DefaultPrimaryButton content="Avançar" onPress={() => navigation.navigate('NewPets')} />
          <DefaultSecondaryButton content="Voltar" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </ScrollView>
  );
}
