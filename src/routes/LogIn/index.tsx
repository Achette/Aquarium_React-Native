import { S } from './styles';
import { useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { Text } from '@rneui/base';
import { Input } from '@rneui/themed';
import { LogInBanner } from '../../components/LogInBanner';
import { PrimaryButton, TextButton } from '../../components/DefaultButtons';


function LogIn({navigation}:any) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputsContents = [
    { placeholder: 'Email', leftIconName: 'mail', errorMessage: 'E-mail inválido', inputMode: 'email', secureTextEntry: false, onChange: setEmail },
    { placeholder: 'Senha', leftIconName: 'lock', errorMessage: 'Senha inválida', inputMode: 'text', secureTextEntry: true, onChange: setPassword },
  ]

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
              onChange={item.onChange}
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
      
        <PrimaryButton content="Entrar" onPress={() => {navigation.navigate('Aquariums')}} />
        <View style={S.infoText}>
          <Text style={S.subtitle}>Ainda não tem conta?</Text>
          <TextButton content="Cadastrar" onPress={() => {navigation.navigate('SignUp')}} />
        </View>
      </View>
    </ScrollView>
  );
};

export default LogIn;
