import { S } from './styles';
import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from '@rneui/themed';
import { ItemButton } from '../../components/ItemButton';
import { PrimaryButton, SecondaryButton } from '../../components/DefaultButtons';


function NewSensors({navigation}:any) {

  const [hasExternalTemperatureSensor, setHasExternalTemperatureSensor] = useState(false);
  const [hasWaterLevelSensor, setHasWaterLevelSensor] = useState(false);
  const [hasOxygenLevelSensor, setHasOxygenLevelSensor] = useState(false);
  const [hasLuminositySensor, setHasLuminositySensor] = useState(false);
  const [hasPhSensor, setHasPhSensor] = useState(false);
  const [hasSaturationSensor, setHasSaturationSensor] = useState(false);
  
  const externalTemperatureIcon = require('../../assets/icons/sensors/temperature.png');
  const waterLevelIcon = require('../../assets/icons/sensors/waterlevel.png');
  const oxygenLevelIcon = require('../../assets/icons/sensors/oxygen.png');
  const luminosityIcon = require('../../assets/icons/sensors/luminosity.png');
  const phIcon = require('../../assets/icons/sensors/ph.png');
  const saturationIcon = require('../../assets/icons/sensors/saturation.png');

  const sensors = [
    { title: 'Temperatura Externa', icon: externalTemperatureIcon, onPress: () => setHasExternalTemperatureSensor(!hasExternalTemperatureSensor), isSelected: hasExternalTemperatureSensor },
    { title: 'Nível da Água', icon: waterLevelIcon, onPress: () => setHasWaterLevelSensor(!hasWaterLevelSensor), isSelected: hasWaterLevelSensor },
    { title: 'Nível de Oxigênio', icon: oxygenLevelIcon, onPress: () => setHasOxygenLevelSensor(!hasOxygenLevelSensor), isSelected: hasOxygenLevelSensor },
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
