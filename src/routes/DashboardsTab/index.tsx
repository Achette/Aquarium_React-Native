import { S } from './styles';
import { Text, View } from 'react-native';
import { TopBar } from '../../components/TopBar';


export default function DashboardsTab() {

  const icon = require('../../assets/icons/tabbar/dashboard.png');
  const title = 'Dashboards';

  return (
    <View style={S.container}>
      <TopBar 
        title={title}
        icon={icon}
      />
      <Text style={S.text}>Dashboards</Text>
    </View>
  );
};
