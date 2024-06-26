import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Home, LogIn, SignUp, AquariumsSelection, NewAquarium, NewAccessories, NewSensors, NewPets, Aquarium } from '../routes';
import { AquariumProvider, useAquarium } from '../context';
import { Loading } from '../components';
import { Colors } from '../theme';


const Stack = createStackNavigator();

function AppNavigator() {
  const { setToken, setUserId } = useAquarium();
  const [ initialRoute, setInitialRoute ] = useState("Home");
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const handleStart = async () => {
      try {
        const username = await AsyncStorage.getItem('username');
        const password = await AsyncStorage.getItem('password');
        const userId = await AsyncStorage.getItem('userId');
        
        if (username && password && userId) {
          console.log(`Usuário logado previamente - username: ${username}, password: ${password}, userId: ${userId}`);

          const userData = {
            username: username,
            password: password,
          };

          try {
            const response = await axios.post(`${process.env.BASE_URL}/login`, userData);
            const jwt = response.data.jwt;
            await AsyncStorage.setItem('jwt', jwt);
            setToken(jwt);
            setUserId(userId);
            console.log(`Login realizado novamente - Novo token: ${jwt}`);
            setInitialRoute("AquariumsSelection");
          } catch (e) {
            console.log(`Erro ao fazer login com usuário salvo: ${e}`);
          }
        } else {
          console.log('Nenhum usuário logado, redirecionando para página "Home"');
        }
      } catch (e) {
        console.log(`Erro ao fazer login com usuário salvo: ${e}`);
      } finally {
        setIsLoading(false);
      }
    };

    handleStart();
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? (
        <Loading text='Autenticando usuário...' />
      ) : (
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
      )}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AquariumProvider>
      <AppNavigator />
    </AquariumProvider>
  );
}
