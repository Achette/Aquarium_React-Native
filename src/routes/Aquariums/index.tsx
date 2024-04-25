import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Text } from '@rneui/base';
import { UserBar } from '../../components/UserBar';

function Aquariums({navigation}) {
  return (
    <View style={styles.page}>
      <UserBar
        userButtonContent="JP"
        userButtonOnPress={() => {alert('oi :)')}}
        logOffButtonOnPress={() => {alert('vlw flw')}}
      />
      <FlatList/>
      <Text>Lista de Aquários</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex:1,
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default Aquariums;
