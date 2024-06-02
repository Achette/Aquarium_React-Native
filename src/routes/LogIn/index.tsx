import { View, ScrollView, Alert } from 'react-native';
import { Input } from '@rneui/themed';
import { Text } from '@rneui/base';
import { LogInBanner, DefaultPrimaryButton, DefaultTextButton } from '../../components';
import { useLogIn } from '../../hooks';
import { S } from './styles';


export default function LogIn({navigation}:any) {
  const {
    setName, setPassword,
    userErrorMessage,
    passwordErrorMessage,
    handleLogIn
  } = useLogIn(navigation);

  const inputsContents = [
    { placeholder: 'Usuário', leftIconName: 'user', errorMessage: userErrorMessage, inputMode: 'text', secureTextEntry: false, onChangeText: setName},
    { placeholder: 'Senha', leftIconName: 'lock', errorMessage: passwordErrorMessage, inputMode: 'text', secureTextEntry: true, onChangeText: setPassword },
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
          <DefaultTextButton content="Esqueci minha senha" onPress={() => {Alert.alert('Esqueceu?', 'Sinto muito :(\n\nDizem que ômega-3 é bom pra memória')}} />
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