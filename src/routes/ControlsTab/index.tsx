import { S } from './styles';
import { useState } from 'react';
import { View } from 'react-native';
import { TopBar } from '../../components/TopBar';
import { ItemControlButton } from '../../components/ItemControlButton';


export default function ControlsTab() {

  const icon = require('../../assets/icons/tabbar/controls.png');
  const title = 'Controles';

  const [hasPump, setHasPump] = useState(true);
  const [hasFeeder, setHasFeeder] = useState(true);
  const [hasThermostat, setHasThermostat] = useState(true);
  const [hasFilter, setHasFilter] = useState(true);
  const [hasLedLights, setHasLedLights] = useState(true);

  const pumpIcon = require('../../assets/icons/accessories/pump.png');
  const feederIcon = require('../../assets/icons/accessories/feeder.png');
  const thermostatIcon = require('../../assets/icons/accessories/thermostat.png');
  const filterIcon = require('../../assets/icons/accessories/filter.png');
  const ledLightsIcon = require('../../assets/icons/accessories/ledlights.png');

  const controls = [
    { title: 'Bombinha', icon: pumpIcon, onPress: () => setHasPump(!hasPump), isSelected: hasPump },
    { title: 'Alimentador', icon: feederIcon, onPress: () => setHasFeeder(!hasFeeder), isSelected: hasFeeder },
    { title: 'Termostato', icon: thermostatIcon, onPress: () => setHasThermostat(!hasThermostat), isSelected: hasThermostat },
    { title: 'Filtro', icon: filterIcon, onPress: () => setHasFilter(!hasFilter), isSelected: hasFilter },
    { title: 'Luzes de LED', icon: ledLightsIcon, onPress: () => setHasLedLights(!hasLedLights), isSelected: hasLedLights },
  ]

  return (
    <View style={S.container}>
      <TopBar 
        title={title}
        icon={icon}
      />

      <View style={S.controlsButtonsContainer}>
        {controls.map((item, index) => (
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
