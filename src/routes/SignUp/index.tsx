import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text } from '@rneui/base';
import { Input } from '@rneui/themed';
import { LogInBanner } from '../../components/LogInBanner';
import { SecondaryButton, TextButton } from '../../components/DefaultButtons';
import { Colors } from '../../theme/Colors';

function LogIn({navigation}) {
  return (
    <ScrollView>
      <View style={styles.page}>
        <LogInBanner />
        <View>
          <Text style={styles.title}>Bem vindo!</Text>
          <Text style={styles.subtitle}>Faça login para acessar sua conta</Text>
        </View>
      
        <View style={styles.inputContainer}>
          <Input
            containerStyle={styles.input}
            placeholder="Nome"
            placeholderTextColor={Colors.placeholderText}
            leftIcon={{ type: 'feather', name: 'user', color: Colors.placeholderText }}
            errorStyle={{ color: Colors.inputErrorText }}
          />
          <Input
            containerStyle={styles.input}
            placeholder="Email"
            inputMode="email"
            placeholderTextColor={Colors.placeholderText}
            leftIcon={{ type: 'feather', name: 'mail', color: Colors.placeholderText }}
            errorMessage="E-mail inválido"
            errorStyle={{ color: Colors.inputErrorText }}
          />
          <Input
            containerStyle={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            placeholderTextColor={Colors.placeholderText}
            leftIcon={{ type: 'feather', name: 'lock', color: Colors.placeholderText }}
            errorMessage="Senha inválida"
            errorStyle={{ color: Colors.inputErrorText }}
          />
          <Input
            containerStyle={styles.input}
            placeholder="Confirme sua senha"
            secureTextEntry={true}
            placeholderTextColor={Colors.placeholderText}
            leftIcon={{ type: 'feather', name: 'lock', color: Colors.placeholderText }}
            errorMessage="Senha inválida"
            errorStyle={{ color: Colors.inputErrorText }}
          />
        </View>
      
        <SecondaryButton content="Cadastrar" onPress={() => {}} />
        <View style={{flexDirection: 'row', marginVertical: 15}}>
          <Text style={styles.subtitle}>Já tem uma conta?</Text>
          <TextButton content="Entrar" onPress={() => {navigation.navigate('LogIn')}} />
        </View>
      
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex:1,
    marginVertical: 10,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    color: Colors.primary,
    marginTop: 52,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.subtitleText,
    opacity: 0.6,
    marginTop: 8,
  },
  input: {
    marginBottom: 8,
  },
  inputContainer: {
    marginTop: 16,
    width: '80%',
    opacity: 0.6,
  }
});

export default LogIn;
