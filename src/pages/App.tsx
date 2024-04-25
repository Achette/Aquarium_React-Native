import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../routes/Home';
import LogIn from '../routes/LogIn';
import SignUp from '../routes/SignUp';
import Aquariums from '../routes/Aquariums';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="LogIn" component={LogIn} options={{headerShown: false}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
        <Stack.Screen name="Aquariums" component={Aquariums} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
