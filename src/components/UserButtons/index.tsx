import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import { Colors } from '../../theme/Colors';

type UserButtonProps = {
  content: string;
  onPress: any;
};

type LogOffButtonProps = {
  onPress: any;
};

export const UserButton = ({content, onPress}:UserButtonProps) => {
  return (
    <Button 
      title={content}
      type="solid"
      buttonStyle={styles.userButton}
      titleStyle={styles.userButtonTitle}
      onPress={onPress}
    />
  );
};

export const LogOffButton = ({onPress}:LogOffButtonProps) => {
  return (
    <Button 
      type="solid"
      buttonStyle={styles.logOffButton}
      icon={{name: 'power', type: 'feather', size: 15, color: 'white'}}
      iconContainerStyle={styles.logOffIconContainer}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  userButton: {
    backgroundColor: Colors.primary,
    width: 40,
    height: 40,
    borderRadius: 60,
  },
  userButtonTitle: {
    fontSize: 18,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  logOffButton: {
    backgroundColor: Colors.primary,
    width: 36,
    height: 36,
    borderRadius: 50
  },
  logOffIconContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36
  }
});
