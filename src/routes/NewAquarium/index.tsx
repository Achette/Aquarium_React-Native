import { S } from './styles';
import { useAquarium } from '../../context';
import { View, ScrollView } from 'react-native';
import { Text, Input } from '@rneui/themed';
import { NewAquariumCheckbox } from '../../components/NewAquariumCheckbox';
import { NewAquariumValueChange } from '../../components/NewAquariumValueChange';
import { PrimaryButton, SecondaryButton } from '../../components/DefaultButtons';


function NewAquarium({navigation}:any) {

  const { 
    aquariumName, setAquariumName,
    selectedShape, setShape, 
    selectedMaterial, setMaterial,
    selectedVoltage, setVoltage, 
    thickness, setThickness, 
    height, setHeight, 
    volume, setVolume,
  } = useAquarium();

  const rectangular = require('../../assets/icons/shapes/rectangular.png');
  const circle = require('../../assets/icons/shapes/circular.png');
  const hexagonal = require('../../assets/icons/shapes/hexagonal.png');
  const voltage = require('../../assets/icons/voltage.png');

  const shapes = [
    { title: 'Retangular', value: 'Retangular', icon: rectangular },
    { title: 'Curvo', value: 'Curvo', icon: circle },
    { title: 'Hexagonal', value: 'Hexagonal', icon: hexagonal },
  ]

  const materials = [
    { title: 'Vidro', value: 'Vidro' },
    { title: 'Acrílico', value: 'Acrílico' },
    { title: 'Plástico', value: 'Plástico' },
  ]

  const voltages = [
    { title: '127V', value: '127V', icon: voltage },
    { title: '220V', value: '220V', icon: voltage },
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
      <View style={S.page}>
        <Text style={[S.title, {fontSize: 28}]}>Novo Aquário</Text>
        <View style={S.inputContainer}>
          <Input
            containerStyle={S.input}
            inputStyle={{padding: 0}}
            placeholder="Nome do aquário"
            placeholderTextColor={S.placeholderText.color}
            errorMessage="Campo obrigatório"
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
          <PrimaryButton content="Avançar" onPress={() => navigation.navigate('NewAccessories')} />
          <SecondaryButton content="Voltar" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </ScrollView>
  );
}

export default NewAquarium;
