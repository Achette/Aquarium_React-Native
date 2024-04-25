import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text } from '@rneui/base';
import { Input } from '@rneui/themed';
import { LogInBanner } from '../../components/LogInBanner';
import { PrimaryButton, TextButton } from '../../components/DefaultButtons';
import { Colors } from '../../theme/Colors';

function LogIn({navigation}) {
  return (
    <ScrollView>
      <View style={styles.page}>
        <LogInBanner />
        <View>
          <Text style={styles.title}>Olá!</Text>
          <Text style={styles.subtitle}>Crie sua conta para aproveitar nossas funcionalidades</Text>
        </View>
      
        <View style={styles.inputContainer}>
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
        </View>

        <View style={{marginVertical: 10}}>
          <TextButton content="Esqueci minha senha" onPress={() => {alert("Sinto muito :(")}} />
        </View>
      
        <PrimaryButton content="Entrar" onPress={() => {navigation.navigate('Aquariums')}} />
        <View style={{flexDirection: 'row', marginVertical: 15}}>
          <Text style={styles.subtitle}>Ainda não tem conta?</Text>
          <TextButton content="Cadastrar" onPress={() => {navigation.navigate('SignUp')}} />
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
