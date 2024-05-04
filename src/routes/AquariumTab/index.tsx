import { S } from './styles';
import { Text, View } from 'react-native';
import { TopBar } from '../../components/TopBar';


export default function AquariumTab({navigation}:any) {

  const icon = require('../../assets/icons/shapes/hexagonal.png');
  const title = 'Aquário 1';

  return (
    <View style={S.container}>
      <TopBar 
        title={title}
        icon={icon}
        hasBackButton={true}
        navigation={navigation}
      />
      <Text style={S.text}>Aquário</Text>
    </View>
  );
};
