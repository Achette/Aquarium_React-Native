import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Text } from '@rneui/base';

function Aquariums({navigation}) {
  return (
    <View style={styles.page}>
      <FlatList/>
      <Text>Lista de Aquários</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex:1,
    marginVertical: 25,
    alignItems: 'center',
  },
});

export default Aquariums;
