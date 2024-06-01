import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Loading } from '../../components';
import { useLoadAquariumDetails } from '../../hooks';
import { S } from './styles';
import { tabs } from './tabs';


export default function Aquarium({ route }: any) {

  const aquarium = route.params.aquarium;
  const { loading } = useLoadAquariumDetails(aquarium.id);
  const Tab = createBottomTabNavigator()

  if (loading) return <Loading text='Carregando dados do aquário...' />;

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
          initialParams={{ aquarium: aquarium }}
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
