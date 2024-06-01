import { Text, View } from 'react-native';
import { TopBar } from '../../components';
import { Icons } from '../../theme';
import { S } from './styles';


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
