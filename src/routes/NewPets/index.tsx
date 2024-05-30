import { S } from './styles';
import { useAquarium } from '../../context';
import { View, ScrollView } from 'react-native';
import { Text } from '@rneui/themed';
import { ItemButton } from '../../components/ItemButton';
import { PrimaryButton, SecondaryButton } from '../../components/DefaultButtons';


function NewPets({navigation}:any) {

  const {
    aquariumName, setAquariumName,
    selectedShape, setShape,
    selectedMaterial, setMaterial,
    selectedVoltage, setVoltage,
    thickness, setThickness,
    height, setHeight,
    volume, setVolume,
    hasPump, setHasPump,
    hasFeeder, setHasFeeder,
    hasThermostat, setHasThermostat,
    hasFilter, setHasFilter,
    hasLedLights, setHasLedLights,
    hasVegetation, setHasVegetation,
    hasExternalTemperatureSensor, setHasExternalTemperatureSensor,
    hasWaterLevelSensor, setHasWaterLevelSensor,
    hasLuminositySensor, setHasLuminositySensor,
    hasPhSensor, setHasPhSensor,
    hasSaturationSensor, setHasSaturationSensor,

    hasFish, setHasFish,
    hasTurtle, setHasTurtle,
    hasSnake, setHasSnake,
    hasFrog, setHasFrog,
    fishQuantity, setFishQuantity,
    turtleQuantity, setTurtleQuantity,
    snakeQuantity, setSnakeQuantity,
    frogQuantity, setFrogQuantity,
  } = useAquarium();

  const fishIcon = require('../../assets/icons/pets/fish.png');
  const turtleIcon = require('../../assets/icons/pets/turtle.png');
  const snakeIcon = require('../../assets/icons/pets/snake.png');
  const frogIcon = require('../../assets/icons/pets/frog.png');

  const pets = [
    { title: 'Peixe', icon: fishIcon, onPress: () => setHasFish(!hasFish), isSelected: hasFish, itemQuantity: fishQuantity, setQuantity: setFishQuantity},
    { title: 'Tartaruga', icon: turtleIcon, onPress: () => setHasTurtle(!hasTurtle), isSelected: hasTurtle, itemQuantity: turtleQuantity, setQuantity: setTurtleQuantity},
    { title: 'Cobra', icon: snakeIcon, onPress: () => setHasSnake(!hasSnake), isSelected: hasSnake, itemQuantity: snakeQuantity, setQuantity: setSnakeQuantity},
    { title: 'Sapo', icon: frogIcon, onPress: () => setHasFrog(!hasFrog), isSelected: hasFrog, itemQuantity: frogQuantity, setQuantity: setFrogQuantity},
  ]

  const resetParams = () => {
    setAquariumName('');
    setShape('Retangular');
    setMaterial('Vidro');
    setVoltage('127V');

    const number10Params = [setThickness, setHeight, setVolume];
    number10Params.forEach((f) => f(10.0));

    const booleanFalseParams = [
      setHasPump, setHasFeeder, setHasThermostat, setHasFilter, setHasLedLights, setHasVegetation,
      setHasExternalTemperatureSensor, setHasWaterLevelSensor, setHasLuminositySensor, setHasPhSensor, setHasSaturationSensor,
      setHasFish, setHasTurtle, setHasSnake, setHasFrog,
    ];
    booleanFalseParams.forEach((f) => f(false));

    const number1Params = [setFishQuantity, setTurtleQuantity, setSnakeQuantity, setFrogQuantity];
    number1Params.forEach((f) => f(1));
  };

  const handleCreateAquarium = () => {
    const aquariumData = {
      name: aquariumName, 
      shape: selectedShape,
      material: selectedMaterial,
      voltage: selectedVoltage,
      thickness: thickness,
      height: height,
      volume: volume,
    };

    const aquariumAccessories = {
      pump: hasPump,
      feeder: hasFeeder,
      thermostat: hasThermostat,
      filter: hasFilter,
      ledLights: hasLedLights,
      vegetation: hasVegetation,
    };

    const aquariumSensors = {
      externalTemperatureSensor: hasExternalTemperatureSensor,
      waterLevelSensor: hasWaterLevelSensor,
      luminositySensor: hasLuminositySensor,
      phSensor: hasPhSensor,
      saturationSensor: hasSaturationSensor,
    };

    const aquariumPets = {
      fish: hasFish,
      turtle: hasTurtle,
      snake: hasSnake,
      frog: hasFrog,
      fishQuantity: fishQuantity,
      turtleQuantity: turtleQuantity,
      snakeQuantity: snakeQuantity,
      frogQuantity: frogQuantity,
    };

    console.log(`Aquarium Data: ${JSON.stringify(aquariumData)}`);
    console.log(`Aquarium Accessories: ${JSON.stringify(aquariumAccessories)}`);
    console.log(`Aquarium Sensors: ${JSON.stringify(aquariumSensors)}`);
    console.log(`Aquarium Pets: ${JSON.stringify(aquariumPets)}`);

    //! fazer POST na rota de criação de aquário
    //! coletar id do aquário
    //! fazer POST nas rotas de criação de acessórios, sensores e pets

    resetParams(); 
    navigation.navigate('Aquarium');
  };

  return (
    <ScrollView>
      <View style={S.page}>
        <Text style={S.title}>Pets</Text>

        <View style={S.petsButtonsContainer}>
          {pets.map((item, index) => (
            <ItemButton 
              key={index}
              icon={item.icon} 
              title={item.title} 
              onPress={item.onPress} 
              isSelected={item.isSelected}
              hasCounter={true}
              itemQuantity={item.itemQuantity}
              setQuantity={item.setQuantity}
            />
          ))}
        </View>

        <View style={S.buttonsContainer}>
          <PrimaryButton content="Criar aquário" onPress={handleCreateAquarium} />
          <SecondaryButton content="Voltar" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </ScrollView>
  );
}

export default NewPets;
