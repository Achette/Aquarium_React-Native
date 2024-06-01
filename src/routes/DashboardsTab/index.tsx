import { S } from './styles';
import { Icons } from '../../theme/Icons';
import { Text, View } from 'react-native';
import { TopBar } from '../../components/TopBar';


export default function DashboardsTab() {
  return (
    <View style={S.container}>
      <TopBar 
        title='Dashboards'
        icon={Icons.dashboardTabBar}
      />
      <Text style={S.text}>Dashboards</Text>
    </View>
  );
};
