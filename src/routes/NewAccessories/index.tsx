import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text } from '@rneui/themed';
import { Colors } from '../../theme/Colors';
import { PrimaryButton, SecondaryButton } from '../../components/DefaultButtons';

function NewAccessories({navigation}) {

  return (
    <ScrollView>
      <View style={styles.page}>
        <Text style={[styles.title, {fontSize: 28}]}>Acessórios</Text>

        <View style={styles.buttonsContainer}>
          <PrimaryButton content="Avançar" onPress={() => navigation.navigate('NewSensors')} />
          <SecondaryButton content="Voltar" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex:1,
    alignItems: 'center',
    height: '100%',
    margin: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginVertical: 8,
  },
  buttonsContainer: {
    width: '120%',
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
  }
});

export default NewAccessories;
