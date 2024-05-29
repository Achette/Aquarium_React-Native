import { S } from './styles';
import { useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { Text } from '@rneui/base';
import { Input } from '@rneui/themed';
import { LogInBanner } from '../../components/LogInBanner';
import { SecondaryButton, TextButton } from '../../components/DefaultButtons';
import axios from 'axios';


function LogIn({navigation}:any) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');

  const inputsContents = [
    { placeholder: 'Nome', leftIconName: 'user', errorMessage: '', inputMode: 'text', secureTextEntry: false, onChangeText: setName},
    { placeholder: 'Email', leftIconName: 'mail', errorMessage: 'E-mail inválido', inputMode: 'email', secureTextEntry: false, onChangeText: setEmail },
    { placeholder: 'Senha', leftIconName: 'lock', errorMessage: 'Senha inválida', inputMode: 'text', secureTextEntry: true, onChangeText: setPassword },
    { placeholder: 'Confirme sua senha', leftIconName: 'lock', errorMessage: 'Senha inválida', inputMode: 'text', secureTextEntry: true, onChangeText: setPasswordConfirmation},
  ]

  async function handleSignUp() {
    const userData = {
      username: name,
      email: email,
      password: password,
      repeat_password: passwordConfirmation,
    };

    //! criar validação de dados, senha, etc
    //! criar lógica para mensagens de erro

    try {
      const response = await axios.post(`${process.env.BASE_URL}/register`, userData);
      console.log('Usuário criado:', response.data);
  
      const jwt = response.data.data.jwt;
      const userId = response.data.data.user.id;
      console.log(`Token: ${jwt}, id: ${userId}`);
  
      if (jwt) {
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

        <SecondaryButton content="Cadastrar" onPress={handleSignUp} />
        <View style={{flexDirection: 'row', marginVertical: 15}}>
          <Text style={S.subtitle}>Já tem uma conta?</Text>
          <TextButton content="Entrar" onPress={() => {navigation.navigate('LogIn')}} />
        </View>

      </View>
    </ScrollView>
  );
};

export default LogIn;
