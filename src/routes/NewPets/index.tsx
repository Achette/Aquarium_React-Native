import { S } from './styles';
import { Icons } from '../../theme/Icons';
import { useAquarium } from '../../context';
import { View, ScrollView } from 'react-native';
import { Text } from '@rneui/themed';
import { ItemButton } from '../../components/ItemButton';
import { PrimaryButton, SecondaryButton } from '../../components/DefaultButtons';
import axios from 'axios';


function NewPets({navigation}:any) {

  const {
    token,
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
    hasTemperatureSensor, setHasTemperatureSensor,
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

  const headers = { 'Authorization': `${token}` };

  const pets = [
    { title: 'Peixe', icon: Icons.fish, onPress: () => setHasFish(!hasFish), isSelected: hasFish, itemQuantity: fishQuantity, setQuantity: setFishQuantity},
    { title: 'Tartaruga', icon: Icons.turtle, onPress: () => setHasTurtle(!hasTurtle), isSelected: hasTurtle, itemQuantity: turtleQuantity, setQuantity: setTurtleQuantity},
    { title: 'Cobra', icon: Icons.snake, onPress: () => setHasSnake(!hasSnake), isSelected: hasSnake, itemQuantity: snakeQuantity, setQuantity: setSnakeQuantity},
    { title: 'Sapo', icon: Icons.frog, onPress: () => setHasFrog(!hasFrog), isSelected: hasFrog, itemQuantity: frogQuantity, setQuantity: setFrogQuantity},
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
      setHasTemperatureSensor, setHasWaterLevelSensor, setHasLuminositySensor, setHasPhSensor, setHasSaturationSensor,
      setHasFish, setHasTurtle, setHasSnake, setHasFrog,
    ];
    booleanFalseParams.forEach((f) => f(false));

    const number1Params = [setFishQuantity, setTurtleQuantity, setSnakeQuantity, setFrogQuantity];
    number1Params.forEach((f) => f(1));

    console.log('Parâmetros resetados com sucesso!');
  };

  const handleCreateAquarium = async () => {
    const aquariumData = {
      name: aquariumName, 
      format_aquarium: selectedShape,
      material: selectedMaterial,
      voltage: selectedVoltage,
      thickness: `${thickness}`,
      height: `${height}`,
      capacity: `${volume}`,
    };

    const aquariumAccessories = [];
    if (hasPump) aquariumAccessories.push({ name: 'Bombinha' });
    if (hasFeeder) aquariumAccessories.push({ name: 'Alimentador automático' });
    if (hasThermostat) aquariumAccessories.push({ name: 'Termostato / Aquecedor' });
    if (hasFilter) aquariumAccessories.push({ name: 'Filtro' });
    if (hasLedLights) aquariumAccessories.push({ name: 'Luz LED' });
    if (hasVegetation) aquariumAccessories.push({ name: 'Plantas naturais' });

    const aquariumSensors = [];
    if (hasTemperatureSensor) aquariumSensors.push({ name: 'Sensor', metric: 'Temperatura' });
    if (hasWaterLevelSensor) aquariumSensors.push({ name: 'Sensor', metric: 'Nível de água' });
    if (hasLuminositySensor) aquariumSensors.push({ name: 'Sensor', metric: 'Luminosidade' });
    if (hasPhSensor) aquariumSensors.push({ name: 'Sensor', metric: 'pH' });
    if (hasSaturationSensor) aquariumSensors.push({ name: 'Sensor', metric: 'Saturação' });

    const aquariumPets = [];
    if (hasFish) aquariumPets.push({ species: 'Peixe', quantity: fishQuantity });
    if (hasTurtle) aquariumPets.push({ species: 'Tartaruga', quantity: turtleQuantity });
    if (hasSnake) aquariumPets.push({ species: 'Cobra', quantity: snakeQuantity });
    if (hasFrog) aquariumPets.push({ species: 'Sapo', quantity: frogQuantity });

    console.log(`Aquarium Data: ${JSON.stringify(aquariumData)}`);
    console.log(`Aquarium Accessories: ${JSON.stringify(aquariumAccessories)}`);
    console.log(`Aquarium Sensors: ${JSON.stringify(aquariumSensors)}`);
    console.log(`Aquarium Pets: ${JSON.stringify(aquariumPets)}`);

    try {
      const aquariumResponse = await axios.post(`${process.env.BASE_URL}/aquarium`, aquariumData, { headers });
      const aquariumId = aquariumResponse.data.result.id;
      console.log(`Aquário criado com sucesso - ID: ${aquariumId}`);

      aquariumAccessories.forEach(async (accessory) => {
        const response = await axios.post(`${process.env.BASE_URL}/aquarium/${aquariumId}/accessories`, accessory, { headers });
        console.log(`${response.data.message} - ID: ${response.data.result.id}, Name: ${response.data.result.name}`);
      });

      aquariumSensors.forEach(async (sensor) => {
        const response = await axios.post(`${process.env.BASE_URL}/aquarium/${aquariumId}/sensors`, sensor, { headers });
        console.log(`${response.data.message} - ID: ${response.data.result.id}, Name: ${response.data.result.name}, Metric: ${response.data.result.metric}`);
      });

      aquariumPets.forEach(async (pet) => {
        const response = await axios.post(`${process.env.BASE_URL}/aquarium/${aquariumId}/pets`, pet, { headers });
        console.log(`${response.data.message} - ID: ${response.data.result.id}, Species: ${response.data.result.species}, Quantity: ${response.data.result.quantity}`);
      });

      resetParams(); 
      navigation.navigate('Aquarium');
    } catch (e) {
      console.error('Erro ao criar aquário:', e);
    }
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
