import { View, ScrollView } from 'react-native';
import { Text } from '@rneui/base';
import { Input } from '@rneui/themed';
import { LogInBanner, DefaultSecondaryButton, DefaultTextButton } from '../../components';
import { useSignUp } from '../../hooks';
import { S } from './styles';


export default function SignUp({navigation}:any) {
  const {
    setName, setEmail, setPassword, setPasswordConfirmation,
    userErrorMessage, emailErrorMessage, passwordErrorMessage, passwordConfirmationErrorMessage,
    handleSignUp
  } = useSignUp(navigation);

  const inputsContents = [
    { placeholder: 'Usuário', leftIconName: 'user', errorMessage: userErrorMessage, inputMode: 'text', secureTextEntry: false, onChangeText: setName},
    { placeholder: 'Email', leftIconName: 'mail', errorMessage: emailErrorMessage, inputMode: 'email', secureTextEntry: false, onChangeText: setEmail },
    { placeholder: 'Senha', leftIconName: 'lock', errorMessage: passwordErrorMessage, inputMode: 'text', secureTextEntry: true, onChangeText: setPassword },
    { placeholder: 'Confirme sua senha', leftIconName: 'lock', errorMessage: passwordConfirmationErrorMessage, inputMode: 'text', secureTextEntry: true, onChangeText: setPasswordConfirmation},
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