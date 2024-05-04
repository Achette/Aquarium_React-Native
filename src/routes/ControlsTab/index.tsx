import { S } from './styles';
import { Text, View } from 'react-native';
import { TopBar } from '../../components/TopBar';


export default function ControlsTab() {

  const icon = require('../../assets/icons/tabbar/controls.png');
  const title = 'Controles';

  return (
    <View style={S.container}>
      <TopBar 
        title={title}
        icon={icon}
      />
      <Text style={S.text}>Controles</Text>
    </View>
  );
};
