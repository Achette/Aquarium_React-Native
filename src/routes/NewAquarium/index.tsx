import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { NewAquariumCheckbox } from '../../components/NewAquariumCheckbox';
import { NewAquariumValueChange } from '../../components/NewAquariumValueChange';
import { Text, Input } from '@rneui/themed';
import { Colors } from '../../theme/Colors';

function NewAquarium({navigation}) {

  const [selectedShape, setShape] = useState('rectangular');
  const [selectedMaterial, setMaterial] = useState('glass');
  const [selectedVoltage, setVoltage] = useState('127');
  const [thickness, setThickness] = useState(10.0);
  const [height, setHeight] = useState(10.0);
  const [volume, setVolume] = useState(10.0);

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

  const checkBoxesObjects = [
    { title: 'Formato', value: selectedShape, object: shapes, onSelect: setShape },
    { title: 'Material', value: selectedMaterial, object: materials, onSelect: setMaterial },
    { title: 'Voltagem', value: selectedVoltage, object: voltages, onSelect: setVoltage },
  ]

  const valueChangeObjects = [
    { title: 'Espessura (mm)', value: thickness, setValue: setThickness },
    { title: 'Altura (cm)', value: height, setValue: setHeight },
    { title: 'Volume (L)', value: volume, setValue: setVolume },
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

        {checkBoxesObjects.map((obj) => (
          <NewAquariumCheckbox
            key={obj.title}
            onSelect={obj.onSelect}
            selectedValue={obj.value}
            object={obj.object}
            title={obj.title}
          />
        ))}

        {valueChangeObjects.map((obj) => (
          <NewAquariumValueChange
            key={obj.title}
            title={obj.title}
            value={obj.value}
            setValue={obj.setValue}
          />
        ))}

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
