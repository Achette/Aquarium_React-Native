import { S } from './styles';
import { Icons } from '../../theme/Icons';
import { useAquarium } from '../../context';
import { useEffect } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardsTab from '../DashboardsTab';
import AquariumTab from '../AquariumTab';
import ControlsTab from '../ControlsTab';
import axios from 'axios';


const Tab = createBottomTabNavigator()

const tabs = [
  { name: 'Dashboards', component: DashboardsTab, icon: Icons.dashboardTabBar },
  { name: 'Início', component: AquariumTab, icon: Icons.homeTabBar },
  { name: 'Controles', component: ControlsTab, icon: Icons.controlTabBar },
]

export default function Aquarium({ route }:any) {

  const { token, aquariumsList, setAquariumsList } = useAquarium();
  let { aquarium } = route.params;

  const headers = { 'Authorization': `${token}` };

  useEffect(() => {
    const getAquariumDetails = async () => {
      try {
        const [accessoriesResponse, sensorsResponse, petsResponse] = await Promise.all([
          axios.get(`${process.env.BASE_URL}/aquarium/${aquarium.id}/accessories`, { headers }),
          axios.get(`${process.env.BASE_URL}/aquarium/${aquarium.id}/sensors`, { headers }),
          axios.get(`${process.env.BASE_URL}/aquarium/${aquarium.id}/pets`, { headers }),
        ]);

        aquarium.accessories = accessoriesResponse.data.map((accessory: any) => ({ name: accessory.name }));
        aquarium.sensors = sensorsResponse.data.map((sensor: any) => ({ name: sensor.name, metric: sensor.metric, current: sensor.current }));
        aquarium.pets = petsResponse.data.map((pet: any) => ({ species: pet.species, quantity: pet.quantity }));

        const updatedAquariumsList = aquariumsList.map((a: any) => (a.id === aquarium.id ? aquarium : a));
        setAquariumsList(updatedAquariumsList);
        console.log('Aquários atualizados:', updatedAquariumsList);
      } catch (e) {
        console.error('Erro ao buscar detalhes do aquário:', e);
      }
    };

    getAquariumDetails();
  }, []);

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
          initialParams={{ aquarium }}
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
