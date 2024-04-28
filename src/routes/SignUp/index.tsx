import { S } from './styles';
import { useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { Text } from '@rneui/base';
import { Input } from '@rneui/themed';
import { LogInBanner } from '../../components/LogInBanner';
import { SecondaryButton, TextButton } from '../../components/DefaultButtons';


function LogIn({navigation}:any) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const inputsContents = [
    { placeholder: 'Nome', leftIconName: 'user', errorMessage: '', inputMode: 'text', secureTextEntry: false, onChange: setName},
    { placeholder: 'Email', leftIconName: 'mail', errorMessage: 'E-mail inválido', inputMode: 'email', secureTextEntry: false, onChange: setEmail },
    { placeholder: 'Senha', leftIconName: 'lock', errorMessage: 'Senha inválida', inputMode: 'text', secureTextEntry: true, onChange: setPassword },
    { placeholder: 'Confirme sua senha', leftIconName: 'lock', errorMessage: 'Senha inválida', inputMode: 'text', secureTextEntry: true, onChange: setPasswordConfirmation},
  ]

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
              onChange={item.onChange}
              leftIcon={{ type: 'feather', name: item.leftIconName, color: S.placeholderText.color }}
              errorMessage={item.errorMessage}
              errorStyle={S.error}
              inputMode={item.inputMode}
              secureTextEntry={item.secureTextEntry}
            />
          ))}
        </View>

        <SecondaryButton content="Cadastrar" onPress={() => {Alert.alert('Prontinho', 'Finge que tá cadastrado e segue o baile')}} />
        <View style={{flexDirection: 'row', marginVertical: 15}}>
          <Text style={S.subtitle}>Já tem uma conta?</Text>
          <TextButton content="Entrar" onPress={() => {navigation.navigate('LogIn')}} />
        </View>

      </View>
    </ScrollView>
  );
};

export default LogIn;
