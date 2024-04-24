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
      buttonStyle={styles.button}
      containerStyle={styles.container}
      onPress={onPress}
    />
  );
};

export const SecondaryButton = ({content, onPress}:ButtonProps) => {
  return (
    <Button 
      title={content}
      type="outline"
      titleStyle={{ color: Colors.primary }}
      buttonStyle={[styles.button, styles.secondaryButton]}
      containerStyle={styles.container}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    width: 140,
    height: 48,
  },
  secondaryButton: {
    backgroundColor: Colors.secondary,
    borderWidth: 0,
  },
  container: {
    marginVertical: 10,
    marginHorizontal: 50,
  },
});
