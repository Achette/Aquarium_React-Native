import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { AquariumItems } from '../AquariumItems';

type AquariumsListProps = {
  navigation: any;
  data: any;
};

export const AquariumsList = ({navigation, data}:AquariumsListProps) => {
  return(
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <AquariumItems
          item={item}
          onPress={() => {navigation.navigate('Aquariums')}}
        />
      )}
      keyExtractor={item => item.id}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
    marginTop: 16,
  },
});
