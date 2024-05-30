import { S } from './styles';
import { useState, useContext } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from '@rneui/base';
import { Input } from '@rneui/themed';
import { LogInBanner } from '../../components/LogInBanner';
import { PrimaryButton, TextButton } from '../../components/DefaultButtons';
import { AquariumContext } from '../../context'
import axios from 'axios';


function LogIn({navigation}:any) {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');
  const { token, setToken } = useContext(AquariumContext);

  const inputsContents = [
    { placeholder: 'Nome', leftIconName: 'user', errorMessage: '', inputMode: 'text', secureTextEntry: false, onChangeText: setName},
    { placeholder: 'Senha', leftIconName: 'lock', errorMessage: 'Senha inválida', inputMode: 'text', secureTextEntry: true, onChangeText: setPassword },
  ]

  const storeToken = async (token: any) => {
    try {
      await AsyncStorage.setItem('token', token);
      console.log('Token salvo local:', token);
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
      console.log('Usuário logado:', response.data);

      const { token, id } = response.data.data;
      console.log(`Token: ${token}, id: ${id}`);

      if (token) {
        setToken(token);
        setUserId(id);
        storeToken(token);
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
          <TextButton content="Esqueci minha senha" onPress={() => {Alert.alert('Esqueceu?', 'Sinto muito :(')}} />
        </View>

        <PrimaryButton content="Entrar" onPress={handleLogIn} />
        <View style={S.infoText}>
          <Text style={S.subtitle}>Ainda não tem conta?</Text>
          <TextButton content="Cadastrar" onPress={() => {navigation.navigate('SignUp')}} />
        </View>
      </View>
    </ScrollView>
  );
};

export default LogIn;
