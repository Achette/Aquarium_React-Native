import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { Button } from '@rneui/themed';
import { Colors } from '../../theme/Colors';

type AquariumItemsProps = {
  item: any;
  onPress: any;
};

export const AquariumItems = ({item, onPress}:AquariumItemsProps) => {

  let icon;
  switch (item.icon) {
    case 'circular':
      icon = require('../../assets/icons/circularshape.png');
      break;
    case 'hexagonal':
      icon = require('../../assets/icons/hexagonalshape.png');
      break;
    default:
      icon = require('../../assets/icons/rectangularshape.png');
      break;
  };

  return (
    <Button 
      type="outline"
      buttonStyle={styles.button}
      containerStyle={styles.buttoncontainer}
      onPress={onPress}
    >
      <Image source={icon} />
      <Text style={styles.buttonText}>{item.name}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
  },
  buttonTitle: {
    fontSize: 16,
    color: Colors.primary,
  },
  buttoncontainer: {
    borderRadius: 50,
    borderColor: Colors.primary,
    borderWidth: 1,
    marginVertical: 12,
    width: '85%',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: Colors.primary,
    marginLeft: 16,
    fontWeight: 'bold',
  },
});
