import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Text } from '@rneui/themed';
import { Colors } from '../../theme/Colors';

type ItemButtonProps = {
  icon: any;
  title: string;
  onPress: any;
  isSelected: boolean;
  hasCounter?: boolean;
  itemQuantity?: number;
  setQuantity?: any;
}

export const ItemButton = ({icon, title, onPress, isSelected=false, hasCounter=false, itemQuantity, setQuantity}:ItemButtonProps) => {
  
  let selectionOpacity = isSelected ? 1 : 0.4;

  return (
    <View>
      <TouchableOpacity 
        style={[styles.button, {opacity: selectionOpacity}]}
        onPress={onPress}
      >
        <Image source={icon} style={styles.icon}/>
        <Text style={styles.title}>{title}</Text>
        {isSelected && hasCounter ? 
          <View style={styles.counterContainer}>
            <TouchableOpacity>
              <Text
                style={styles.changeValueButton}
                onPress={() => {if(itemQuantity>1){setQuantity(itemQuantity - 1)}}}
              >-</Text>
            </TouchableOpacity>
            <Text style={styles.changeValueText}>{itemQuantity}</Text>
            <TouchableOpacity>
              <Text
                style={styles.changeValueButton}
                onPress={() => {if(itemQuantity<50){setQuantity(itemQuantity + 1)}}}
              >+</Text>
            </TouchableOpacity>
          </View>
          : null
        }
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: Colors.primary,
    borderWidth: 1.2,
    borderRadius: 16,
    alignItems: 'center',
    padding: 2,
    width: 100,
    minHeight: 120,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 14,
    color: Colors.primary,   
    textAlign: 'center',
  },
  icon: {
    height: 70,
    maxWidth: 90,
    resizeMode: 'contain',
    marginVertical: 8,
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  changeValueButton: {
    color: Colors.primary,
    fontSize: 20,
    paddingHorizontal: 15,
  },
  changeValueText: {
    color: Colors.primary,
    fontSize: 18,
    marginHorizontal: 4, 
  },
});
