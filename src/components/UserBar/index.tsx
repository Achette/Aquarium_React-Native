import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { UserButton, LogOffButton } from '../UserButtons';
import { Colors } from '../../theme/Colors';

type UserBarProps = {
  userButtonContent: string;
  userButtonOnPress: any;
  logOffButtonOnPress: any;
};

export const UserBar = ({userButtonContent, userButtonOnPress, logOffButtonOnPress}:UserBarProps) => {
  
  const LogoPNG = require('../../assets/icons/logo.png');

  return (
    <View style={styles.topBar}>
      <Image source={LogoPNG}/>
      <View style={styles.buttonsContainer}>
        <UserButton content={userButtonContent} onPress={userButtonOnPress}/>
        <Text style={styles.verticalLine}>|</Text>
        <LogOffButton onPress={logOffButtonOnPress}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 105,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 50,
    padding: 5,
    maxHeight: 50,
  },
  verticalLine: {
    color: Colors.primary,
    fontWeight: '100',
    fontSize: 40,
    lineHeight: 45,
  },
});

