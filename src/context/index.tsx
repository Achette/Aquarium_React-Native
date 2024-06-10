import { createContext, useState, useContext } from 'react';
import { AppContextProps, AppProviderProps } from '../types';


export const AquariumContext = createContext<AppContextProps>({} as AppContextProps);

export function AquariumProvider({ children }: AppProviderProps) {
  const [token, setToken] = useState<string>('');
  const [userId, setUserId] = useState<string>('');
  const [aquariumsList, setAquariumsList] = useState<any[]>([]);

  const [aquariumName, setAquariumName] = useState<string>('');
  const [selectedShape, setShape] = useState<string>('Retangular');
  const [selectedMaterial, setMaterial] = useState<string>('Vidro');
  const [selectedVoltage, setVoltage] = useState<string>('110');
  const [thickness, setThickness] = useState<number>(0.0);
  const [height, setHeight] = useState<number>(0.0);
  const [volume, setVolume] = useState<number>(0.0);

  const [hasPump, setHasPump] = useState<boolean>(false);
  const [hasFeeder, setHasFeeder] = useState<boolean>(false);
  const [hasThermostat, setHasThermostat] = useState<boolean>(false);
  const [hasFilter, setHasFilter] = useState<boolean>(false);
  const [hasLedLights, setHasLedLights] = useState<boolean>(false);
  const [hasVegetation, setHasVegetation] = useState<boolean>(false);

  const [hasTemperatureSensor, setHasTemperatureSensor] = useState<boolean>(false);
  const [hasWaterLevelSensor, setHasWaterLevelSensor] = useState<boolean>(false);
  const [hasLuminositySensor, setHasLuminositySensor] = useState<boolean>(false);
  const [hasPhSensor, setHasPhSensor] = useState<boolean>(false);
  const [hasSaturationSensor, setHasSaturationSensor] = useState<boolean>(false);

  const [hasFish, setHasFish] = useState<boolean>(false);
  const [hasTurtle, setHasTurtle] = useState<boolean>(false);
  const [hasSnake, setHasSnake] = useState<boolean>(false);
  const [hasFrog, setHasFrog] = useState<boolean>(false);

  const [fishQuantity, setFishQuantity] = useState<number>(1);
  const [turtleQuantity, setTurtleQuantity] = useState<number>(1);
  const [snakeQuantity, setSnakeQuantity] = useState<number>(1);
  const [frogQuantity, setFrogQuantity] = useState<number>(1);

  return (
    <AquariumContext.Provider value={{ 
      token, setToken,
      userId, setUserId,
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
    }}>
      {children}
    </AquariumContext.Provider>
  );
}

export const useAquarium = () => useContext(AquariumContext);
