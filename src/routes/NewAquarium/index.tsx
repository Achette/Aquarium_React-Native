import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { Button, Text, Input } from '@rneui/themed';
import { Colors } from '../../theme/Colors';

function NewAquarium({navigation}) {

  const [selectedShape, setShape] = useState('rectangular');
  const [selectedMaterial, setMaterial] = useState('glass');
  const [selectedVoltage, setVoltage] = useState('127');

  const rectangular = require('../../assets/icons/rectangularshape.png');
  const circle = require('../../assets/icons/circularshape.png');
  const hexagonal = require('../../assets/icons/hexagonalshape.png');
  const voltageIcon = require('../../assets/icons/voltage.png');

  const formats = [
    { title: 'Retangular', format: 'rectangular', icon: rectangular },
    { title: 'Curvo', format: 'circle', icon: circle },
    { title: 'Hexagonal', format: 'hexagonal', icon: hexagonal },
  ]

  const materials = [
    { title: 'Vidro', material: 'glass' },
    { title: 'Acrílico', material: 'acrylic' },
    { title: 'Plástico', material: 'plastic' },
  ]

  const voltage = [
    { title: '127V', voltage: '127' },
    { title: '220V', voltage: '220' },
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

        <Text style={styles.title}>Formato</Text>
        <View style={styles.checkBoxContainer}>
          {formats.map((format) => (
            <Button
              key={format.format}
              title={format.title}
              type='outline'
              titleStyle={styles.checkBoxText}
              buttonStyle={[ styles.checkBox, selectedShape === format.format ? {} : {opacity: 0.4}]}
              onPress={() => setShape(format.format)}
              icon={<Image source={format.icon} style={styles.checkBoxIcon}/>}
            />
          ))}
        </View>

        <Text style={styles.title}>Material</Text>
        <View style={styles.checkBoxContainer}>
          {materials.map((material) => (
            <Button
              key={material.material}
              title={material.title}
              type='outline'
              titleStyle={styles.checkBoxText}
              buttonStyle={[ styles.checkBox, selectedMaterial === material.material ? {} : {opacity: 0.4}]}
              onPress={() => setMaterial(material.material)}
            />
          ))}
        </View>

        <Text style={styles.title}>Voltagem</Text>
        <View style={styles.checkBoxContainer}>
          {voltage.map((voltage) => (
            <Button
              key={voltage.voltage}
              title={voltage.title}
              type='outline'
              titleStyle={styles.checkBoxText}
              buttonStyle={[ styles.checkBox, selectedVoltage === voltage.voltage ? {} : {opacity: 0.4}]}
              onPress={() => setVoltage(voltage.voltage)}
              icon={<Image source={voltageIcon} style={[styles.checkBoxIcon, {marginRight: 2}]}/>}
            />
          ))}
        </View>

        <Text style={styles.title}>Espessura (mm)</Text>

        <Text style={styles.title}>Largura (cm)</Text>

        <Text style={styles.title}>Comprimento (cm)</Text>

        <Text style={styles.title}>Profundidade (cm)</Text>

        <Text style={styles.title}>Capaciade (L)</Text>

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
    width: '100%',
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
  }
});

export default NewAquarium;
