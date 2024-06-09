import { Text, View, Linking } from 'react-native';
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
      <Text style={S.text}>
        Para conferir e analisar os dados históricos e dashboards, acesse a versão web do nosso app: {' '}
      </Text>
      <Text 
        style={[S.text, S.textLink]}
        onPress={() => Linking.openURL('https://aquarium-lake.vercel.app/')}
      >
        Aquarium Web
      </Text>
    </View>
  );
};
