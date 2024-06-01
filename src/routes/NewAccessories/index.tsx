import { S } from './styles';
import { Icons } from '../../theme/Icons';
import { useAquarium } from '../../context';
import { View, ScrollView } from 'react-native';
import { Text } from '@rneui/themed';
import { PrimaryButton, SecondaryButton } from '../../components/DefaultButtons';
import { ItemButton } from '../../components/ItemButton';


function NewAccessories({navigation}:any) {

  const { 
    hasPump, setHasPump,
    hasFeeder, setHasFeeder,
    hasThermostat, setHasThermostat,
    hasFilter, setHasFilter,
    hasLedLights, setHasLedLights,
    hasVegetation, setHasVegetation,
  } = useAquarium();

  const accessories = [
    { title: 'Bombinha', icon: Icons.pump, onPress: () => setHasPump(!hasPump), isSelected: hasPump },
    { title: 'Alimentador', icon: Icons.feeder, onPress: () => setHasFeeder(!hasFeeder), isSelected: hasFeeder },
    { title: 'Termostato', icon: Icons.thermostat, onPress: () => setHasThermostat(!hasThermostat), isSelected: hasThermostat },
    { title: 'Filtro', icon: Icons.filter, onPress: () => setHasFilter(!hasFilter), isSelected: hasFilter },
    { title: 'Luzes de LED', icon: Icons.ledLights, onPress: () => setHasLedLights(!hasLedLights), isSelected: hasLedLights },
    { title: 'Vegetação', icon: Icons.vegetation, onPress: () => setHasVegetation(!hasVegetation), isSelected: hasVegetation },
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
