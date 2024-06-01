import { useState } from 'react';
import { Alert } from 'react-native';
import axios from 'axios';
import { useResetParams } from './';
import { useAquarium } from '../context';
import { AquariumDataProps } from '../types';


export const useCreateAquarium = () => {
  const [ loading, setLoading ] = useState(false);
  const resetParams = useResetParams();

  const {
    token, setAquariumsList,
    aquariumName, selectedShape, selectedMaterial, selectedVoltage, thickness, height, volume,
    hasPump, hasFeeder, hasThermostat, hasFilter, hasLedLights, hasVegetation,
    hasTemperatureSensor, hasWaterLevelSensor, hasLuminositySensor, hasPhSensor, hasSaturationSensor,
    hasFish, hasTurtle, hasSnake, hasFrog,
    fishQuantity, turtleQuantity, snakeQuantity, frogQuantity,
  } = useAquarium();

  const createAquarium = async (navigation:any) => {
    setLoading(true);
    const headers = { 'Authorization': `${token}` };

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
      hasLuminositySensor && { name: 'Sensor', metric: 'Luminosidade', current: '35 lm' },
      hasPhSensor && { name: 'Sensor', metric: 'pH', current: '7' },
      hasSaturationSensor && { name: 'Sensor', metric: 'Saturação', current: '9,07 ppm' },
    ].filter(Boolean);

    const aquariumPets = [
      hasFish && { species: 'Peixe', quantity: fishQuantity },
      hasTurtle && { species: 'Tartaruga', quantity: turtleQuantity },
      hasSnake && { species: 'Cobra', quantity: snakeQuantity },
      hasFrog && { species: 'Sapo', quantity: frogQuantity },
    ].filter(Boolean);

    try {
      const aquariumResponse = await axios.post(`${process.env.BASE_URL}/aquarium`, aquariumData, { headers });
      const aquariumId = aquariumResponse.data.result.id;

      console.log(`Aquário criado com sucesso - ID: ${aquariumId}`);
      aquariumData = { ...aquariumData, id: aquariumId };
      setAquariumsList((prevList: AquariumDataProps[]) => [...prevList, aquariumData]);

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
      setLoading(false);
    }
  };

  return { createAquarium, loading };
};
