import { S } from './styles';
import { Icons } from '../../theme/Icons';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardsTab from '../DashboardsTab';
import AquariumTab from '../AquariumTab';
import ControlsTab from '../ControlsTab';


const Tab = createBottomTabNavigator()

const tabs = [
  { name: 'Dashboards', component: DashboardsTab, icon: Icons.dashboardTabBar },
  { name: 'Início', component: AquariumTab, icon: Icons.homeTabBar },
  { name: 'Controles', component: ControlsTab, icon: Icons.controlTabBar },
]

export default function Aquarium() {
  return (
    <Tab.Navigator
      initialRouteName="Início"
      backBehavior="initialRoute"
      screenOptions={{
        headerShown: false,
        tabBarStyle: S.tabBar,
      }}
    >
      {tabs.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarLabel: tab.name,
            tabBarLabelStyle: S.tabBarLabel,
            tabBarIcon: () => (<Image source={tab.icon} style={S.icon}/>),
            tabBarInactiveBackgroundColor: S.tabBarInactive.color,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
