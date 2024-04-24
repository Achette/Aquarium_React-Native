import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PrimaryButton, SecondaryButton } from '../../components/HomeButtons';
import { HomeBanner } from '../../components/HomeBanner';
import { AquariumImage } from '../../components/AquariumImage';
import { HomeCarousel } from '../../components/HomeCarousel';

function Home({navigation}) {
  return (
    <View style={styles.page}>
      <View style={styles.buttons}>
        <SecondaryButton
          content='Cadastrar'
          onPress={() => navigation.navigate('SignUp')}
        />
        <PrimaryButton
          content='Entrar'
          onPress={() => navigation.navigate('LogIn')}
        />
      </View>
      <HomeBanner />
      <AquariumImage />
      <HomeCarousel />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex:1,
    height: '100%',
    marginVertical: 10,
    justifyContent: 'center',
  },
  buttons: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 42,
    marginTop: 22,
  },
});

export default Home;
