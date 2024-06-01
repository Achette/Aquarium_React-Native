import { useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input } from '@rneui/themed';
import { Text } from '@rneui/base';
import axios from 'axios';
import { LogInBanner, DefaultPrimaryButton, DefaultTextButton } from '../../components';
import { useAquarium } from '../../context'
import { S } from './styles';


export default function LogIn({navigation}:any) {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { setToken, setUserId } = useAquarium();

  const inputsContents = [
    { placeholder: 'Nome', leftIconName: 'user', errorMessage: '', inputMode: 'text', secureTextEntry: false, onChangeText: setName},
    { placeholder: 'Senha', leftIconName: 'lock', errorMessage: 'Senha inválida', inputMode: 'text', secureTextEntry: true, onChangeText: setPassword },
  ]

  const storeUser = async (username:string, password:string, jwt:string, userId:string) => {
    try {
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);
      await AsyncStorage.setItem('jwt', jwt);
      await AsyncStorage.setItem('userId', userId);
      console.log('Dados do usuário salvos com sucesso no AsyncStorage');
    } catch (e) {
      console.error('Erro ao salvar token:', e);
    }
  };

  async function handleLogIn() {
    const userData = {
      username: name,
      password: password,
    };

    //! criar validação de dados, senha, etc
    //! criar lógica para mensagens de erro

    try {
      const response = await axios.post(`${process.env.BASE_URL}/login`, userData);
      const jwt = response.data.jwt;
      const userId = response.data.result.id;
      
      if (jwt) {
        console.log(`Usuário logado - Token: ${jwt}, id: ${userId}`);
        setToken(jwt);
        setUserId(userId);
        storeUser(userData.username, userData.password, jwt, userId);
        Alert.alert('Sucesso!', 'Login realizado com sucesso!');
        navigation.navigate('AquariumsSelection');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      Alert.alert('Erro', 'Falha no login. Tente novamente!');
    }
  }

  return (
    <ScrollView>
      <View style={S.page}>
        <LogInBanner />
        <View>
          <Text style={S.title}>Olá!</Text>
          <Text style={S.subtitle}>Faça login para acessar sua conta</Text>
        </View>
      
        <View style={S.inputContainer}>
          {inputsContents.map((item, index) => (
            <Input
              key={index}
              containerStyle={S.input}
              placeholder={item.placeholder}
              placeholderTextColor={S.placeholderText.color}
              onChangeText={item.onChangeText}
              leftIcon={{ type: 'feather', name: item.leftIconName, color: S.placeholderText.color }}
              errorMessage={item.errorMessage}
              errorStyle={S.error}
              inputMode={item.inputMode}
              secureTextEntry={item.secureTextEntry}
            />
          ))}
        </View>

        <View style={{marginVertical: 10}}>
          <DefaultTextButton content="Esqueci minha senha" onPress={() => {Alert.alert('Esqueceu?', 'Sinto muito :(')}} />
        </View>

        <DefaultPrimaryButton content="Entrar" onPress={handleLogIn} />
        <View style={S.infoText}>
          <Text style={S.subtitle}>Ainda não tem conta?</Text>
          <DefaultTextButton content="Cadastrar" onPress={() => {navigation.navigate('SignUp')}} />
        </View>
      </View>
    </ScrollView>
  );
};
