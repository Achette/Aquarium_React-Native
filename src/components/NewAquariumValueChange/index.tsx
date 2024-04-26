import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from '@rneui/themed';
import { Colors } from '../../theme/Colors';

type NewAquariumValueChangeProps = {
  title: string;
  value: number;
  setValue: any;
}

export const NewAquariumValueChange = ({title, value, setValue}:NewAquariumValueChangeProps) => {
  return (
    <View style={styles.selectionContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.changeValueContainer}>
        <TouchableOpacity>
          <Text
            style={styles.changeValueButton}
            onPress={() => {if(value>0){setValue(value - 1)}}}
          >-</Text>
        </TouchableOpacity>
        <Text style={styles.changeValueText}>{value}</Text>
        <TouchableOpacity>
          <Text
            style={styles.changeValueButton}
            onPress={() => {if(value<50){setValue(value + 1)}}}
          >+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginVertical: 8,
  },
  selectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
  },
  changeValueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 6,
    minWidth: 115,
  },
  changeValueButton: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  changeValueText: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 4, 
  },
});
