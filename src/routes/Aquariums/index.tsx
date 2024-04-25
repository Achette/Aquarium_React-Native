import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@rneui/base';
import { UserBar } from '../../components/UserBar';
import { AquariumsList } from '../../components/AquariumsList';
import { ActionButton } from '../../components/ActionButton';
import { Colors } from '../../theme/Colors';

let aquariums = [
  { id: '1', icon: 'hexagonal', name: 'Aquário 1' },
  { id: '2', icon: 'rectangular', name: 'Aquário 2' },
  { id: '3', icon: 'circular', name: 'Aquário 3' },
];

// aquariums = [];

const addIcon = require('../../assets/icons/addicon.png');

function Aquariums({navigation}) {
  return (
    <View style={styles.page}>
      <UserBar
        userButtonContent="JP"
        userButtonOnPress={() => {alert('oi :)')}}
        logOffButtonOnPress={() => {
          alert('vlw flw');
          navigation.navigate('Home');
        }}
      />

      {aquariums.length === 0 ? (
        <View style={styles.noAquariums}>
          <Text style={styles.noAquariumsText}>Nenhum aquário cadastrado 😕</Text>
        </View>
      ) : (
        <AquariumsList
          navigation={navigation}
          data={aquariums}
        />
      )}

      <View style={styles.bottomBar}>
        <ActionButton
          icon={addIcon}
          title='Novo Aquário'
          onPress={() => alert('Me sinto pressionado')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex:1,
    alignItems: 'center',
  },
  noAquariums: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noAquariumsText: {
    fontSize: 18,
    color: Colors.primary,
  },
  bottomBar: {
    marginBottom: 50,
    width: '85%',
    alignItems: 'flex-end',
  },
});

export default Aquariums;
