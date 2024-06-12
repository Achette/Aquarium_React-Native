import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Input } from '@rneui/themed';
import { NewAquariumCheckbox, NewAquariumValueChange, DefaultPrimaryButton, DefaultSecondaryButton } from '../../components';
import { useAquarium } from '../../context';
import { Icons } from '../../theme';
import { S } from './styles';


export default function NewAquarium({navigation}:any) {
  const [ errorMessage, setErrorMessage ] = useState('');

  const { 
    aquariumName, setAquariumName,
    selectedShape, setShape, 
    selectedMaterial, setMaterial,
    selectedVoltage, setVoltage, 
    thickness, setThickness, 
    height, setHeight, 
    volume, setVolume,
  } = useAquarium();

  const shapes = [
    { title: 'Retangular', value: 'Retangular', icon: Icons.rectangularShape },
    { title: 'Curvo', value: 'Curvo', icon: Icons.circularShape },
    { title: 'Sextavado', value: 'Sextavado', icon: Icons.hexagonalShape },
  ]

  const materials = [
    { title: 'Vidro', value: 'Vidro' },
    { title: 'Acrílico', value: 'Acrílico' },
    { title: 'Plástico', value: 'Plástico' },
  ]

  const voltages = [
    { title: '110V', value: '110', icon: Icons.voltageIcon },
    { title: '220V', value: '220', icon: Icons.voltageIcon },
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

  const handleNext = () => {
    setErrorMessage('');
    if (!aquariumName) {
      setErrorMessage('Preencha o campo nome do aquário');
      return;
    }
    navigation.navigate('NewAccessories');
  }

  return (
    <ScrollView>
      <View style={S.page}>
        <Text style={[S.title, {fontSize: 28}]}>Novo Aquário</Text>
        <View style={S.inputContainer}>
          <Input
            containerStyle={S.input}
            inputStyle={{padding: 0}}
            placeholder="Nome do aquário"
            placeholderTextColor={S.placeholderText.color}
            errorMessage={errorMessage}
            errorStyle={S.error}
            value={aquariumName}
            onChangeText={setAquariumName}
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

        <View style={S.buttonsContainer}>
          <DefaultPrimaryButton content="Avançar" onPress={handleNext} />
          <DefaultSecondaryButton content="Voltar" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </ScrollView>
  );
}
