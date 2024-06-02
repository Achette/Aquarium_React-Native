import { useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-native';
import { useAquarium } from '../context';


export function useSignUp(navigation:any) {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordConfirmation, setPasswordConfirmation ] = useState('');
  const [ userErrorMessage, setUserErrorMessage ] = useState('');
  const [ emailErrorMessage, setEmailErrorMessage ] = useState('');
  const [ passwordErrorMessage, setPasswordErrorMessage ] = useState('');
  const [ passwordConfirmationErrorMessage, setPasswordConfirmationErrorMessage ] = useState('');
  const { setToken, setUserId } = useAquarium();

  const resetErrorMessages = () => {
    setUserErrorMessage('');
    setEmailErrorMessage('');
    setPasswordErrorMessage('');
    setPasswordConfirmationErrorMessage('');
  };

  const validateInputs = (userData:any) => {
    resetErrorMessages();
    if (!userData.username) {
      setUserErrorMessage('Preencha o campo usuário');
      return false;
    }
    if (!userData.email) {
      setEmailErrorMessage('Preencha o campo e-mail');
      return false;
    }
    if (!userData.password) {
      setPasswordErrorMessage('Preencha o campo senha');
      return false;
    }
    if (!userData.repeat_password) {
      setPasswordConfirmationErrorMessage('Preencha o campo de confirmação de senha');
      return false;
    }
    if (userData.password !== userData.repeat_password) {
      setPasswordConfirmationErrorMessage('As senhas não coincidem');
      return false;
    }
    if (userData.username.length < 3) {
      setUserErrorMessage('Usuário deve ter no mínimo 3 caracteres');
      return false;
    }
    const emailPattern = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    if (!emailPattern.test(userData.email)) {
      setEmailErrorMessage('Email inválido');
      return false;
    }
    return true;
  };

  const handleSignUp = async () => {
    const userData = {
      username: name,
      email: email,
      password: password,
      repeat_password: passwordConfirmation,
    };

    if (!validateInputs(userData)) return;

    try {
      const response = await axios.post(`${process.env.BASE_URL}/register`, userData);
      const jwt = response.data.jwt;
      const userId = response.data.user.id;

      if (jwt) {
        console.log(`Usuário criado - Token: ${jwt}, id: ${userId}`);
        setToken(jwt);
        setUserId(userId);
        Alert.alert('Sucesso!', 'Cadastro realizado com sucesso!');
        navigation.navigate('LogIn');
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      Alert.alert('Erro', 'Falha no cadastro de usuário. Tente novamente!');
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    passwordConfirmation,
    setPasswordConfirmation,
    userErrorMessage,
    emailErrorMessage,
    passwordErrorMessage,
    passwordConfirmationErrorMessage,
    handleSignUp,
  };
}
