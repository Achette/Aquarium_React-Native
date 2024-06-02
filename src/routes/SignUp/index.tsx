import { useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { Text } from '@rneui/base';
import { Input } from '@rneui/themed';
import axios from 'axios';
import { LogInBanner, DefaultSecondaryButton, DefaultTextButton } from '../../components';
import { useAquarium } from '../../context'
import { S } from './styles';


export default function LogIn({navigation}:any) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [ userErrorMessage, setUserErrorMessage ] = useState('');
  const [ emailErrorMessage, setEmailErrorMessage ] = useState('');
  const [ passwordErrorMessage, setPasswordErrorMessage ] = useState('');
  const [ passwordConfirmationErrorMessage, setPasswordConfirmationErrorMessage ] = useState('');
  const { setToken, setUserId } = useAquarium();

  const inputsContents = [
    { placeholder: 'Usuário', leftIconName: 'user', errorMessage: userErrorMessage, inputMode: 'text', secureTextEntry: false, onChangeText: setName},
    { placeholder: 'Email', leftIconName: 'mail', errorMessage: emailErrorMessage, inputMode: 'email', secureTextEntry: false, onChangeText: setEmail },
    { placeholder: 'Senha', leftIconName: 'lock', errorMessage: passwordErrorMessage, inputMode: 'text', secureTextEntry: true, onChangeText: setPassword },
    { placeholder: 'Confirme sua senha', leftIconName: 'lock', errorMessage: passwordConfirmationErrorMessage, inputMode: 'text', secureTextEntry: true, onChangeText: setPasswordConfirmation},
  ]

  async function handleSignUp() {
    const userData = {
      username: name,
      email: email,
      password: password,
      repeat_password: passwordConfirmation,
    };

    const resetErrorMessages = () => {
      setUserErrorMessage('');
      setEmailErrorMessage('');
      setPasswordErrorMessage('');
      setPasswordConfirmationErrorMessage('');
    }

    resetErrorMessages();

    if (!userData.username) {
      setUserErrorMessage('Preencha o campo usuário');
      return;
    }
    if (!userData.email) {
      setEmailErrorMessage('Preencha o campo e-mail');
      return;
    }
    if (!userData.password) {
      setPasswordErrorMessage('Preencha o campo senha');
      return;
    }
    if (!userData.repeat_password) {
      setPasswordConfirmationErrorMessage('Preencha o campo de confirmação de senha');
      return;
    }
    if (userData.password !== userData.repeat_password) {
      setPasswordConfirmationErrorMessage('As senhas não coincidem');
      return;
    }
    if (userData.username.length < 3) {
      setUserErrorMessage('Usuário deve ter no mínimo 3 caracteres');
      return;
    }
    const emailPattern = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    if (!emailPattern.test(userData.email)) {
      setEmailErrorMessage('Email inválido');
      return;
    }

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
  }

  return (
    <ScrollView>
      <View style={S.page}>
        <LogInBanner />
        <View>
          <Text style={S.title}>Bem vindo!</Text>
          <Text style={S.subtitle}>Crie sua conta para aproveitar nossas funcionalidades</Text>
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

        <DefaultSecondaryButton content="Cadastrar" onPress={handleSignUp} />
        <View style={{flexDirection: 'row', marginVertical: 15}}>
          <Text style={S.subtitle}>Já tem uma conta?</Text>
          <DefaultTextButton content="Entrar" onPress={() => {navigation.navigate('LogIn')}} />
        </View>

      </View>
    </ScrollView>
  );
};
