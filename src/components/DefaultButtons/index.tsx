import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import { Colors } from '../../theme/Colors';

type ButtonProps = {
  content: string;
  onPress: any;
};

export const PrimaryButton = ({content, onPress}:ButtonProps) => {
  return (
    <Button 
      title={content}
      type="solid"
      buttonStyle={styles.primaryButton}
      titleStyle={styles.primaryButtonTitle}
      containerStyle={styles.primaryButtoncontainer}
      onPress={onPress}
    />
  );
};

export const SecondaryButton = ({content, onPress}:ButtonProps) => {
  return (
    <Button 
      title={content}
      type="outline"
      buttonStyle={styles.secondaryButton}
      titleStyle={styles.secondaryButtonTitle}
      containerStyle={styles.secondaryButtoncontainer}
      onPress={onPress}
    />
  );
}

export const TextButton = ({content, onPress}:ButtonProps) => {
  return (
    <Button 
      title={content}
      type="clear"
      titleStyle={styles.textButtonTitle}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: Colors.primary,
    height: 48,
  },
  primaryButtonTitle: {
    fontSize: 16,
  },
  primaryButtoncontainer: {
    width: '80%',
    borderRadius: 60,
  },
  secondaryButton: {
    height: 48,
  },
  secondaryButtonTitle: {
    fontSize: 16,
    color: Colors.primary,
  },
  secondaryButtoncontainer: {
    width: '80%',
    borderRadius: 60,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  textButtonTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.primary,
  },
});
