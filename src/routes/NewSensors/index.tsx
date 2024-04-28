import React, {useState} from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text } from '@rneui/themed';
import { Colors } from '../../theme/Colors';
import { PrimaryButton, SecondaryButton } from '../../components/DefaultButtons';
import { ItemButton } from '../../components/ItemButton';

function NewSensors({navigation}) {

  const [hasExternalTemperatureSensor, setHasExternalTemperatureSensor] = useState(false);
  const [hasWaterLevelSensor, setHasWaterLevelSensor] = useState(false);
  const [hasOxygenLevelSensor, setHasOxygenLevelSensor] = useState(false);
  const [hasLuminositySensor, setHasLuminositySensor] = useState(false);
  const [hasPhSensor, setHasPhSensor] = useState(false);
  const [hasSaturationSensor, setHasSaturationSensor] = useState(false);
  
  const externalTemperatureIcon = require('../../assets/icons/temperaturesensor.png');
  const waterLevelIcon = require('../../assets/icons/waterlevelsensor.png');
  const oxygenLevelIcon = require('../../assets/icons/oxygensensor.png');
  const luminosityIcon = require('../../assets/icons/luminositysensor.png');
  const phIcon = require('../../assets/icons/phsensor.png');
  const saturationIcon = require('../../assets/icons/saturationsensor.png');

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
      <View style={styles.page}>
        <Text style={styles.title}>Sensores</Text>

        <View style={styles.sensorsButtonsContainer}>
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

        <View style={styles.buttonsContainer}>
          <PrimaryButton content="Avançar" onPress={() => navigation.navigate('NewPets')} />
          <SecondaryButton content="Voltar" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex:1,
    alignItems: 'center',
    height: '100%',
    margin: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginTop: 8,
    marginBottom: 16,
  },
  sensorsButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
    marginVertical: 28,
  
  },
  buttonsContainer: {
    width: '120%',
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
  }
});

export default NewSensors;
