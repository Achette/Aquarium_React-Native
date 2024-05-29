import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from '../theme/Colors'
import { AquariumProvider } from '../context'
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

function App() {
  return (
    <AquariumProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ cardStyle: {backgroundColor: Colors.background}}}
        >
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen name="LogIn" component={LogIn} options={{headerShown: false}} />
          <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
          <Stack.Screen name="AquariumsSelection" component={AquariumsSelection} options={{headerShown: false}} />
          <Stack.Screen name="NewAquarium" component={NewAquarium} options={{headerShown: false}} />
          <Stack.Screen name="NewAccessories" component={NewAccessories} options={{headerShown: false}} />
          <Stack.Screen name="NewSensors" component={NewSensors} options={{headerShown: false}} />
          <Stack.Screen name="NewPets" component={NewPets} options={{headerShown: false}} />
          <Stack.Screen name="Aquarium" component={Aquarium} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </AquariumProvider>
  );
};

export default App;
