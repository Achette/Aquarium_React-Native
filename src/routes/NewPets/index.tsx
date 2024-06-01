import { useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { Text } from '@rneui/themed';
import axios from 'axios';
import { ItemButton, DefaultPrimaryButton, DefaultSecondaryButton, Loading } from '../../components';
import { AquariumDataProps } from '../../types';
import { useAquarium } from '../../context';
import { Icons } from '../../theme';
import { S } from './styles';


export default function NewPets({navigation}:any) {

  const [ isLoading, setIsLoading ] = useState(false);

  const {
    token,
    aquariumsList, setAquariumsList,

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
    setVoltage('110V');

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

    setIsLoading(true);

    let aquariumData: AquariumDataProps = {
      name: aquariumName, 
      format_aquarium: selectedShape,
      material: selectedMaterial,
      voltage: selectedVoltage,
      thickness: `${thickness}`,
      height: `${height}`,
      capacity: `${volume}`,
    };

    const aquariumAccessories = [
      hasPump && { name: 'Bombinha' },
      hasFeeder && { name: 'Alimentador automático' },
      hasThermostat && { name: 'Termostato / Aquecedor' },
      hasFilter && { name: 'Filtro' },
      hasLedLights && { name: 'Luz LED' },
      hasVegetation && { name: 'Plantas naturais' },
    ].filter(Boolean);

    const aquariumSensors = [
      hasTemperatureSensor && { name: 'Sensor', metric: 'Temperatura', current: '27°C' },
      hasWaterLevelSensor && { name: 'Sensor', metric: 'Nível de água', current: '90%' },
      hasLuminositySensor && { name: 'Sensor', metric: 'Luminosidade', current: '35 lm'},
      hasPhSensor && { name: 'Sensor', metric: 'pH', current: '7' },
      hasSaturationSensor && { name: 'Sensor', metric: 'Saturação', current: '9,07 ppm'},
    ].filter(Boolean);

    const aquariumPets = [
      hasFish && { species: 'Peixe', quantity: fishQuantity },
      hasTurtle && { species: 'Tartaruga', quantity: turtleQuantity },
      hasSnake && { species: 'Cobra', quantity: snakeQuantity },
      hasFrog && { species: 'Sapo', quantity: frogQuantity },
    ].filter(Boolean);

    console.log(`Aquarium Data: ${JSON.stringify(aquariumData)}`);
    console.log(`Aquarium Accessories: ${JSON.stringify(aquariumAccessories)}`);
    console.log(`Aquarium Sensors: ${JSON.stringify(aquariumSensors)}`);
    console.log(`Aquarium Pets: ${JSON.stringify(aquariumPets)}`);

    try {
      const aquariumResponse = await axios.post(`${process.env.BASE_URL}/aquarium`, aquariumData, { headers });
      const aquariumId = aquariumResponse.data.result.id;

      console.log(`Aquário criado com sucesso - ID: ${aquariumId}`);
      aquariumData = { ...aquariumData, id: aquariumId };
      setAquariumsList((prevList:AquariumDataProps[]) => [...prevList, aquariumData]);

      await Promise.all([
        ...aquariumAccessories.map(accessory => axios.post(`${process.env.BASE_URL}/aquarium/${aquariumId}/accessories`, accessory, { headers })),
        ...aquariumSensors.map(sensor => axios.post(`${process.env.BASE_URL}/aquarium/${aquariumId}/sensors`, sensor, { headers })),
        ...aquariumPets.map(pet => axios.post(`${process.env.BASE_URL}/aquarium/${aquariumId}/pets`, pet, { headers }))
      ]);

      console.log('Acessórios, sensores e pets adicionados com sucesso.');

      resetParams();
      navigation.navigate('AquariumsSelection');
    } catch (e) {
      Alert.alert('Erro', 'Houve um erro ao criar o aquário. Tente novamente mais tarde.')
      console.error('Erro ao criar aquário:', e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView>
      <View style={S.page}>
        {isLoading ? (
          <Loading text='Criando aquário...' />
        ) : (
          <>
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
              <DefaultPrimaryButton content="Criar aquário" onPress={handleCreateAquarium} />
              <DefaultSecondaryButton content="Voltar" onPress={() => navigation.goBack()} />
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
}
