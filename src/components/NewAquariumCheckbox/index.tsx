import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Text } from '@rneui/themed';
import { Colors } from '../../theme/Colors';

type NewAquariumCheckboxProps = {
  onSelect: any;
  selectedValue: string;
  object: any[];
  title: string;
  iconStyle?: any;
}

export const NewAquariumCheckbox = ({onSelect, selectedValue, object, title, iconStyle}:NewAquariumCheckboxProps) => {
  return (
    <View style={{ width: '100%' }}>
      <Text style={styles.title}>{title}</Text>
        <View style={styles.checkBoxContainer}>
          {object.map((obj) => (
            <Button
              key={obj.value}
              title={obj.title}
              type='outline'
              titleStyle={styles.checkBoxText}
              buttonStyle={[ styles.checkBox, selectedValue === obj.value ? {} : {opacity: 0.4}]}
              onPress={() => onSelect(obj.value)}
              icon={
                obj.icon === undefined ? null :
                <Image source={obj.icon} style={[styles.checkBoxIcon, iconStyle]}/>
              }
            />
          ))}
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
  checkBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    margin: 0,
    padding: 0,
    marginBottom: 16,
  },
  checkBoxText: {
    fontSize: 14,
    color: Colors.primary,
  },
  checkBox: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 6,
  },
  checkBoxIcon: {
    width: 16,
    height: 16,
    objectFit: 'contain',
    marginRight: 6,
  },
});
