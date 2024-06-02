import { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { useAquarium } from '../context';


export function useLogIn(navigation:any) {
  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ userErrorMessage, setUserErrorMessage ] = useState('');
  const [ passwordErrorMessage, setPasswordErrorMessage ] = useState('');
  const { setToken, setUserId } = useAquarium();

  const resetErrorMessages = () => {
    setUserErrorMessage('');
    setPasswordErrorMessage('');
  };

  const validateInputs = (userData:any) => {
    resetErrorMessages();
    if (!userData.username) {
      setUserErrorMessage('Preencha o campo usuário');
      return false;
    }
    if (!userData.password) {
      setPasswordErrorMessage('Preencha o campo senha');
      return false;
    }
    if (userData.username.length < 3) {
      setUserErrorMessage('Usuário deve ter no mínimo 3 caracteres');
      return false;
    }
    return true;
  };

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

  const handleLogIn = async () => {
    const userData = {
      username: name,
      password: password,
    };

    if (!validateInputs(userData)) return;

    try {
      const response = await axios.post(`${process.env.BASE_URL}/login`, userData);
      const jwt = response.data.jwt;
      const userId = response.data.result.id;

      if (jwt) {
        console.log(`Usuário logado - Token: ${jwt}, id: ${userId}`);
        setToken(jwt);
        setUserId(userId);
        storeUser(userData.username, userData.password, jwt, userId);
        navigation.navigate('AquariumsSelection');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      Alert.alert('Erro', 'Falha no login. Tente novamente!');
    }
  };

  return {
    setName, setPassword,
    userErrorMessage, passwordErrorMessage,
    handleLogIn,
  };
}
