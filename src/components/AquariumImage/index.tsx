import React from 'react';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';

export const AquariumImage = () => {
  
  const AquariumPNG = require('../../assets/img/aquarium.png');
  
  return (
    <Image
      source={AquariumPNG}
      style={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
});
