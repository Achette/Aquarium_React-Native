import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { PrimaryButton, SecondaryButton } from '../../components/HomeButtons';

function Home() {
  return (
    <View style={styles.view}>
      <SecondaryButton content='Cadastrar'/>
      <PrimaryButton content='Entrar'/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  view: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '20%',
  },
});
