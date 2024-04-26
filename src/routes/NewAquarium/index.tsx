import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { NewAquariumCheckbox } from '../../components/NewAquariumCheckbox';
import { Text, Input } from '@rneui/themed';
import { Colors } from '../../theme/Colors';

function NewAquarium({navigation}) {

  const [selectedShape, setShape] = useState('rectangular');
  const [selectedMaterial, setMaterial] = useState('glass');
  const [selectedVoltage, setVoltage] = useState('127');
  const [thickness, setThickness] = useState(10);
  const [width, setWidth] = useState(10);
  const [length, setLength] = useState(10);
  const [depth, setDepth] = useState(10);
  const [capacity, setCapacity] = useState(10);

  const rectangular = require('../../assets/icons/rectangularshape.png');
  const circle = require('../../assets/icons/circularshape.png');
  const hexagonal = require('../../assets/icons/hexagonalshape.png');
  const voltage = require('../../assets/icons/voltage.png');

  const shapes = [
    { title: 'Retangular', value: 'rectangular', icon: rectangular },
    { title: 'Curvo', value: 'circle', icon: circle },
    { title: 'Hexagonal', value: 'hexagonal', icon: hexagonal },
  ]

  const materials = [
    { title: 'Vidro', value: 'glass' },
    { title: 'Acrílico', value: 'acrylic' },
    { title: 'Plástico', value: 'plastic' },
  ]

  const voltages = [
    { title: '127V', value: '127', icon: voltage },
    { title: '220V', value: '220', icon: voltage },
  ]

  return (
    <ScrollView>
      <View style={styles.page}>
        <Text style={[styles.title, {fontSize: 28}]}>Novo Aquário</Text>
        <View style={styles.inputContainer}>
          <Input
            containerStyle={styles.input}
            inputStyle={{padding: 0}}
            placeholder="Nome do aquário"
            placeholderTextColor={Colors.placeholderText}
            errorMessage="Campo obrigatório"
            errorStyle={{ color: Colors.inputErrorText }}
          />
        </View>

        <NewAquariumCheckbox
          navigation={navigation}
          onSelect={setShape}
          selectedValue={selectedShape}
          object={shapes}
          title="Formato"
        />

        <NewAquariumCheckbox
          navigation={navigation}
          onSelect={setMaterial}
          selectedValue={selectedMaterial}
          object={materials}
          title="Material"  
        />

        <NewAquariumCheckbox
          navigation={navigation}
          onSelect={setVoltage}
          selectedValue={selectedVoltage}
          object={voltages}
          title="Voltagem"
          iconStyle={{marginRight: 2}}
        />

        <View style={styles.selectionContainer}>
          <Text style={styles.title}>Espessura (mm)</Text>
          <View style={styles.changeValueContainer}>
            <TouchableOpacity>
              <Text
                style={styles.changeValueButton}
                onPress={() => {if(thickness>0){setThickness(thickness - 1)}}}
              >-</Text>
            </TouchableOpacity>
            <Text style={styles.changeValueText}>{thickness}</Text>
            <TouchableOpacity>
              <Text
                style={styles.changeValueButton}
                onPress={() => {if(thickness<50){setThickness(thickness + 1)}}}
              >+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.selectionContainer}>
          <Text style={styles.title}>Largura (cm)</Text>
          <View style={styles.changeValueContainer}>
            <TouchableOpacity>
              <Text
                style={styles.changeValueButton}
                onPress={() => {if(width>0){setWidth(width - 1)}}}
              >-</Text>
            </TouchableOpacity>
            <Text style={styles.changeValueText}>{width}</Text>
            <TouchableOpacity>
              <Text
                style={styles.changeValueButton}
                onPress={() => {if(width<50){setWidth(width + 1)}}}
              >+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.selectionContainer}>
          <Text style={styles.title}>Comprimento (cm)</Text>
          <View style={styles.changeValueContainer}>
            <TouchableOpacity>
              <Text
                style={styles.changeValueButton}
                onPress={() => {if(length>0){setLength(length - 1)}}}
              >-</Text>
            </TouchableOpacity>
            <Text style={styles.changeValueText}>{length}</Text>
            <TouchableOpacity>
              <Text
                style={styles.changeValueButton}
                onPress={() => {if(length<50){setLength(length + 1)}}}
              >+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.selectionContainer}>
          <Text style={styles.title}>Profundidade (cm)</Text>
          <View style={styles.changeValueContainer}>
            <TouchableOpacity>
              <Text
                style={styles.changeValueButton}
                onPress={() => {if(depth>0){setDepth(depth - 1)}}}
              >-</Text>
            </TouchableOpacity>
            <Text style={styles.changeValueText}>{depth}</Text>
            <TouchableOpacity>
              <Text
                style={styles.changeValueButton}
                onPress={() => {if(depth<50){setDepth(depth + 1)}}}
              >+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.selectionContainer}>
          <Text style={styles.title}>Capacidade (L)</Text>
          <View style={styles.changeValueContainer}>
            <TouchableOpacity>
              <Text
                style={styles.changeValueButton}
                onPress={() => {if(capacity>0){setCapacity(capacity - 1)}}}
              >-</Text>
            </TouchableOpacity>
            <Text style={styles.changeValueText}>{capacity}</Text>
            <TouchableOpacity>
              <Text
                style={styles.changeValueButton}
                onPress={() => {if(capacity<500){setCapacity(capacity + 1)}}}
              >+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex:1,
    alignItems: 'center',
    height: '100%',
    margin: 24,
  },
  inputContainer: {
    flex: 1,
    marginTop: 16,
    width: '106%',
    opacity: 0.6,
  },
  input: {
    marginBottom: 8,
    width: '100%',
  },
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
  checkBox: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 6,
  },
  checkBoxText: {
    fontSize: 14,
    color: Colors.primary,
  },
  checkBoxIcon: {
    width: 16,
    height: 16,
    objectFit: 'contain',
    marginRight: 6,
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

export default NewAquarium;
