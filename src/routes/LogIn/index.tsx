import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@rneui/base';
import { LogInBanner } from '../../components/LogInBanner';

function LogIn() {
  return (
    <View style={styles.page}>
      <LogInBanner />
      <Text>LogIn</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex:1,
    height: '100%',
    marginVertical: 10,
    alignItems: 'center',
  },
});

export default LogIn;
