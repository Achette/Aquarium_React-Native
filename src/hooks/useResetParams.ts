import { useAquarium } from '../context';


export const useResetParams = () => {
  const {
    setAquariumName, setShape, setMaterial, setVoltage, setThickness, setHeight, setVolume,
    setHasPump, setHasFeeder, setHasThermostat, setHasFilter, setHasLedLights, setHasVegetation,
    setHasTemperatureSensor, setHasWaterLevelSensor, setHasLuminositySensor, setHasPhSensor, setHasSaturationSensor,
    setHasFish, setHasTurtle, setHasSnake, setHasFrog,
    setFishQuantity, setTurtleQuantity, setSnakeQuantity, setFrogQuantity,
  } = useAquarium();

  const resetParams = () => {
    setAquariumName('');
    setShape('Retangular');
    setMaterial('Vidro');
    setVoltage('110V');

    const number10Params = [setThickness, setHeight, setVolume];
    const booleanParams = [setHasPump, setHasFeeder, setHasThermostat, setHasFilter, setHasLedLights, setHasVegetation, setHasTemperatureSensor, setHasWaterLevelSensor, setHasLuminositySensor, setHasPhSensor, setHasSaturationSensor, setHasFish, setHasTurtle, setHasSnake, setHasFrog];
    const numberParams = [setFishQuantity, setTurtleQuantity, setSnakeQuantity, setFrogQuantity];
    
    number10Params.forEach(param => param(10));
    booleanParams.forEach(param => param(false));
    numberParams.forEach(param => param(1));

    console.log('Parâmetros resetados com sucesso!');
  };

  return resetParams;
};
