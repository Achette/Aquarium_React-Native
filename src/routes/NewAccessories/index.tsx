import React, {useState} from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text } from '@rneui/themed';
import { Colors } from '../../theme/Colors';
import { PrimaryButton, SecondaryButton } from '../../components/DefaultButtons';
import { ItemButton } from '../../components/ItemButton';

function NewAccessories({navigation}) {

  const [hasPump, setHasPump] = useState(false);
  const [hasFeeder, setHasFeeder] = useState(false);
  const [hasThermostat, setHasThermostat] = useState(false);
  const [hasFilter, setHasFilter] = useState(false);
  const [hasLedLights, setHasLedLights] = useState(false);
  const [hasVegetation, setHasVegetation] = useState(false);

  const pumpIcon = require('../../assets/icons/pump.png');
  const feederIcon = require('../../assets/icons/feeder.png');
  const thermostatIcon = require('../../assets/icons/thermostat.png');
  const filterIcon = require('../../assets/icons/filter.png');
  const ledLightsIcon = require('../../assets/icons/ledlights.png');
  const vegetationIcon = require('../../assets/icons/vegetation.png');

  const accessories = [
    { title: 'Bombinha', icon: pumpIcon, onPress: () => setHasPump(!hasPump), isSelected: hasPump },
    { title: 'Alimentador', icon: feederIcon, onPress: () => setHasFeeder(!hasFeeder), isSelected: hasFeeder },
    { title: 'Termostato', icon: thermostatIcon, onPress: () => setHasThermostat(!hasThermostat), isSelected: hasThermostat },
    { title: 'Filtro', icon: filterIcon, onPress: () => setHasFilter(!hasFilter), isSelected: hasFilter },
    { title: 'Luzes de LED', icon: ledLightsIcon, onPress: () => setHasLedLights(!hasLedLights), isSelected: hasLedLights },
    { title: 'Vegetação', icon: vegetationIcon, onPress: () => setHasVegetation(!hasVegetation), isSelected: hasVegetation },
  ]

  return (
    <ScrollView>
      <View style={styles.page}>
        <Text style={styles.title}>Acessórios</Text>

        <View style={styles.accessoriesButtonsContainer}>
          {accessories.map((item, index) => (
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
          <PrimaryButton content="Avançar" onPress={() => navigation.navigate('NewSensors')} />
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
  accessoriesButtonsContainer: {
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

export default NewAccessories;
