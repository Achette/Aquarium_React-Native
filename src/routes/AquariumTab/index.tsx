import { S } from './styles';
import { View } from 'react-native';
import { TopBar } from '../../components/TopBar';
import { ConfigDisplay } from '../../components/ConfigDisplay';


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
    </View>
  );
};
