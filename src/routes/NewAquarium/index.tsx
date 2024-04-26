import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { NewAquariumCheckbox } from '../../components/NewAquariumCheckbox';
import { NewAquariumValueChange } from '../../components/NewAquariumValueChange';
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
          onSelect={setShape}
          selectedValue={selectedShape}
          object={shapes}
          title="Formato"
        />

        <NewAquariumCheckbox
          onSelect={setMaterial}
          selectedValue={selectedMaterial}
          object={materials}
          title="Material"  
        />

        <NewAquariumCheckbox
          onSelect={setVoltage}
          selectedValue={selectedVoltage}
          object={voltages}
          title="Voltagem"
          iconStyle={{marginRight: 2}}
        />

        <NewAquariumValueChange
          title="Espessura (mm)"
          value={thickness}
          setValue={setThickness}
        />

        <NewAquariumValueChange
          title="Largura (cm)"
          value={width}
          setValue={setWidth}
        />

        <NewAquariumValueChange
          title="Comprimento (cm)"
          value={length}
          setValue={setLength}
        />

        <NewAquariumValueChange
          title="Profundidade (cm)"
          value={depth}
          setValue={setDepth}
        />

        <NewAquariumValueChange
          title="Capacidade (L)"
          value={capacity}
          setValue={setCapacity}
        />

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
});

export default NewAquarium;
