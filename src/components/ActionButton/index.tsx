import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Button } from '@rneui/themed';
import { Colors } from '../../theme/Colors';

type ActionButtonProps = {
  icon: any;
  title: string;
  onPress: any;
};

export const ActionButton = ({icon, title, onPress}:ActionButtonProps) => {
  return (
    <View style={styles.buttonElement}>
      <Button
        buttonStyle={styles.button}
        containerStyle={[styles.buttoncontainer]}
        onPress={onPress}
      >
        <Image
          style={{width: 24, height: 24}}
          source={icon}
        />
      </Button>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.secondary,
    width: '100%',
    height: '100%',
  },
  buttoncontainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: Colors.primary,
    borderWidth: 1.5,
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 12,
  },
  buttonElement: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
