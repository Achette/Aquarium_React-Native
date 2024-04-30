import { S } from './styles';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardsTab from '../DashboardsTab';
import AquariumTab from '../AquariumTab';
import ControlsTab from '../ControlsTab';


const Tab = createBottomTabNavigator()

const dashboardIcon = require('../../assets/icons/tabbar/dashboard.png');
const homeIcon = require('../../assets/icons/tabbar/home.png');
const controlIcon = require('../../assets/icons/tabbar/controls.png');

const tabs = [
  { name: 'Dashboards', component: DashboardsTab, icon: dashboardIcon },
  { name: 'Início', component: AquariumTab, icon: homeIcon },
  { name: 'Controles', component: ControlsTab, icon: controlIcon },
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
