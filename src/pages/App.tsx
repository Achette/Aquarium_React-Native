import { S } from './styles';
import { useState, useEffect } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '../theme/Colors';
import { AquariumProvider, useAquarium } from '../context';
import Home from '../routes/Home';
import LogIn from '../routes/LogIn';
import SignUp from '../routes/SignUp';
import AquariumsSelection from '../routes/AquariumsSelection';
import NewAquarium from '../routes/NewAquarium';
import NewAccessories from '../routes/NewAccessories';
import NewSensors from '../routes/NewSensors';
import NewPets from '../routes/NewPets';
import Aquarium from '../routes/Aquarium';

const Stack = createStackNavigator();

function AppNavigator() {
  const { setToken } = useAquarium();
  const [initialRoute, setInitialRoute] = useState("Home");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        console.log('Token lido local (App):', token);
        if (token) {
          setToken(token);
          setInitialRoute("AquariumsSelection");
        }
      } catch (e) {
        console.log('Erro ao ler token:', e);
      } finally {
        setLoading(false);
      }
    };

    getToken();
  }, []);

  if (loading) {
    return (
      <View style={S.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{ cardStyle: { backgroundColor: Colors.background } }}
      >
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="AquariumsSelection" component={AquariumsSelection} options={{ headerShown: false }} />
        <Stack.Screen name="NewAquarium" component={NewAquarium} options={{ headerShown: false }} />
        <Stack.Screen name="NewAccessories" component={NewAccessories} options={{ headerShown: false }} />
        <Stack.Screen name="NewSensors" component={NewSensors} options={{ headerShown: false }} />
        <Stack.Screen name="NewPets" component={NewPets} options={{ headerShown: false }} />
        <Stack.Screen name="Aquarium" component={Aquarium} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return (
    <AquariumProvider>
      <AppNavigator />
    </AquariumProvider>
  );
}

export default App;
