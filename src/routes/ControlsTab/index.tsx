import { S } from './styles';
import { Icons } from '../../theme/Icons';
import { useState } from 'react';
import { View } from 'react-native';
import { TopBar } from '../../components/TopBar';
import { ItemControlButton } from '../../components/ItemControlButton';


export default function ControlsTab() {
  const [hasPump, setHasPump] = useState(true);
  const [hasFeeder, setHasFeeder] = useState(true);
  const [hasThermostat, setHasThermostat] = useState(true);
  const [hasFilter, setHasFilter] = useState(true);
  const [hasLedLights, setHasLedLights] = useState(true);

  const controls = [
    { title: 'Bombinha', icon: Icons.pump, onPress: () => setHasPump(!hasPump), isSelected: hasPump },
    { title: 'Alimentador', icon: Icons.feeder, onPress: () => setHasFeeder(!hasFeeder), isSelected: hasFeeder },
    { title: 'Termostato', icon: Icons.thermostat, onPress: () => setHasThermostat(!hasThermostat), isSelected: hasThermostat },
    { title: 'Filtro', icon: Icons.filter, onPress: () => setHasFilter(!hasFilter), isSelected: hasFilter },
    { title: 'Luzes de LED', icon: Icons.ledLights, onPress: () => setHasLedLights(!hasLedLights), isSelected: hasLedLights },
  ]

  return (
    <View style={S.container}>
      <TopBar 
        title='Controles'
        icon={Icons.controlTabBar}
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
