import { S } from './styles';
import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from '@rneui/themed';
import { PrimaryButton, SecondaryButton } from '../../components/DefaultButtons';
import { ItemButton } from '../../components/ItemButton';


function NewAccessories({navigation}:any) {

  const [hasPump, setHasPump] = useState(false);
  const [hasFeeder, setHasFeeder] = useState(false);
  const [hasThermostat, setHasThermostat] = useState(false);
  const [hasFilter, setHasFilter] = useState(false);
  const [hasLedLights, setHasLedLights] = useState(false);
  const [hasVegetation, setHasVegetation] = useState(false);

  const pumpIcon = require('../../assets/icons/accessories/pump.png');
  const feederIcon = require('../../assets/icons/accessories/feeder.png');
  const thermostatIcon = require('../../assets/icons/accessories/thermostat.png');
  const filterIcon = require('../../assets/icons/accessories/filter.png');
  const ledLightsIcon = require('../../assets/icons/accessories/ledlights.png');
  const vegetationIcon = require('../../assets/icons/accessories/vegetation.png');

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
      <View style={S.page}>
        <Text style={S.title}>Acessórios</Text>

        <View style={S.accessoriesButtonsContainer}>
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

        <View style={S.buttonsContainer}>
          <PrimaryButton content="Avançar" onPress={() => navigation.navigate('NewSensors')} />
          <SecondaryButton content="Voltar" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </ScrollView>
  );
}

export default NewAccessories;
