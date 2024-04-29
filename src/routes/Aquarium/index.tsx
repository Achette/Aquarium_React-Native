import { S } from './styles';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function AquariumTab() {
  return (
    <View style={S.container}>
      <Text style={S.text}>Aquário X</Text>
    </View>
  );
}

function DashboardsTab() {
  return (
    <View style={S.container}>
      <Text style={S.text}>Dashboard</Text>
    </View>
  );
}

function ControlsTab() {
  return (
    <View style={S.container}>
      <Text style={S.text}>Controles</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator() 

export default function Aquarium() {
  return (
      <Tab.Navigator initialRouteName="Início">
        <Tab.Screen name="Dashboards" component={DashboardsTab} />
        <Tab.Screen name="Início" component={AquariumTab} />
        <Tab.Screen name="Controles" component={ControlsTab} />
      </Tab.Navigator>
  );
};
