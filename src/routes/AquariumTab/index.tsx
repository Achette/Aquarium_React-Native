import { S } from './styles';
import { View } from 'react-native';
import { TopBar } from '../../components/TopBar';
import { ConfigDisplay } from '../../components/ConfigDisplay';
import { DataDisplay } from '../../components/DataDisplay';


export default function AquariumTab({navigation}:any) {

  const icon = require('../../assets/icons/shapes/hexagonal.png');
  const title = 'Aquário 1';

  const materialIcon = require('../../assets/icons/config/material.png');
  const voltageIcon = require('../../assets/icons/config/voltage.png');
  const heightIcon = require('../../assets/icons/config/height.png');
  const thicknessIcon = require('../../assets/icons/config/thickness.png');
  const capacityIcon = require('../../assets/icons/config/capacity.png');
  const fishIcon = require('../../assets/icons/pets/fish.png');
  const turtleIcon = require('../../assets/icons/pets/turtle.png');

  const configs = [
    { icon: materialIcon, content: 'Vidro' },
    { icon: voltageIcon, content: '127V' },
    { icon: heightIcon, content: '30cm' },
    { icon: thicknessIcon, content: '3mm' },
    { icon: capacityIcon, content: '3,5L' },
    { icon: fishIcon, content: '8' },
    { icon: turtleIcon, content: '2' },
  ];

  const internalTemperatureIcon = require('../../assets/icons/data/temperature.png');
  const saturarionIcon = require('../../assets/icons/data/saturation.png');
  const phIcon = require('../../assets/icons/data/ph.png');
  const waterLevelIcon = require('../../assets/icons/data/waterlevel.png');
  const luminosityIcon = require('../../assets/icons/data/luminosity.png');
  const lastCleaningIcon = require('../../assets/icons/data/lastcleaning.png');
  const lastFeedingIcon = require('../../assets/icons/data/lastfeeding.png');

  const data = [
    { icon: internalTemperatureIcon, title: 'Temperatura Interna', value: '27°C' },
    { icon: saturarionIcon, title: 'Saturação', value: '9,07 ppm' },
    { icon: phIcon, title: 'PH', value: '7' },
    { icon: waterLevelIcon, title: 'Variação do Nível da Água', value: '17,5 ml' },
    { icon: luminosityIcon, title: 'Luminosidade', value: '35 lm' },
    { icon: lastCleaningIcon, title: 'Última Limpeza', value: '16/04/2024 | 12:00' },
    { icon: lastFeedingIcon, title: 'Última Alimentação', value: '23/04/2024 | 12:00' },
  ]

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
  </View>
  );
};
