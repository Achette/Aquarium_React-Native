import { S } from './styles';
import { useAquarium } from '../../context';
import { View, ScrollView } from 'react-native';
import { Text } from '@rneui/themed';
import { ItemButton } from '../../components/ItemButton';
import { PrimaryButton, SecondaryButton } from '../../components/DefaultButtons';


function NewSensors({navigation}:any) {

  const { 
    hasExternalTemperatureSensor, setHasExternalTemperatureSensor,
    hasWaterLevelSensor, setHasWaterLevelSensor,
    hasLuminositySensor, setHasLuminositySensor,
    hasPhSensor, setHasPhSensor,
    hasSaturationSensor, setHasSaturationSensor,
  } = useAquarium();

  const externalTemperatureIcon = require('../../assets/icons/sensors/temperature.png');
  const waterLevelIcon = require('../../assets/icons/sensors/waterlevel.png');
  const luminosityIcon = require('../../assets/icons/sensors/luminosity.png');
  const phIcon = require('../../assets/icons/sensors/ph.png');
  const saturationIcon = require('../../assets/icons/sensors/saturation.png');

  const sensors = [
    { title: 'Temperatura Externa', icon: externalTemperatureIcon, onPress: () => setHasExternalTemperatureSensor(!hasExternalTemperatureSensor), isSelected: hasExternalTemperatureSensor },
    { title: 'Nível da Água', icon: waterLevelIcon, onPress: () => setHasWaterLevelSensor(!hasWaterLevelSensor), isSelected: hasWaterLevelSensor },
    { title: 'Luminosidade', icon: luminosityIcon, onPress: () => setHasLuminositySensor(!hasLuminositySensor), isSelected: hasLuminositySensor },
    { title: 'pH', icon: phIcon, onPress: () => setHasPhSensor(!hasPhSensor), isSelected: hasPhSensor },
    { title: 'Saturação', icon: saturationIcon, onPress: () => setHasSaturationSensor(!hasSaturationSensor), isSelected: hasSaturationSensor },
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
          <PrimaryButton content="Avançar" onPress={() => navigation.navigate('NewPets')} />
          <SecondaryButton content="Voltar" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </ScrollView>
  );
}

export default NewSensors;
