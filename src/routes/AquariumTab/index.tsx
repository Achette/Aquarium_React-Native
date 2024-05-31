import { S } from './styles';
import { Icons } from '../../theme/Icons';
import { View, Alert } from 'react-native';
import { TopBar } from '../../components/TopBar';
import { ConfigDisplay } from '../../components/ConfigDisplay';
import { DataDisplay } from '../../components/DataDisplay';
import { ActionButton } from '../../components/ActionButton';


export default function AquariumTab({navigation}:any) {

  const icon = Icons.hexagonalShape;
  const title = 'Aquário 1';

  const configs = [
    { icon: Icons.material, content: 'Vidro' },
    { icon: Icons.voltage, content: '110V' },
    { icon: Icons.height, content: '30cm' },
    { icon: Icons.thickness, content: '3mm' },
    { icon: Icons.capacity, content: '3,5L' },
    { icon: Icons.fish, content: '8' },
    { icon: Icons.turtle, content: '2' },
  ];

  const data = [
    { icon: Icons.temperatureData, title: 'Temperatura', value: '27°C' },
    { icon: Icons.saturationData, title: 'Saturação', value: '9,07 ppm' },
    { icon: Icons.phData, title: 'PH', value: '7' },
    { icon: Icons.waterLevelData, title: 'Variação do Nível da Água', value: '17,5 ml' },
    { icon: Icons.luminosityData, title: 'Luminosidade', value: '35 lm' },
    { icon: Icons.lastCleaningData, title: 'Última Limpeza', value: '16/04/2024 | 12:00' },
    { icon: Icons.lastFeedingData, title: 'Última Alimentação', value: '23/04/2024 | 12:00' },
  ];

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
