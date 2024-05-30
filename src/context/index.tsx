import React, { createContext, useState, useContext, SetStateAction } from 'react';

interface AppContextProps {
  token: string; setToken: React.Dispatch<SetStateAction<string>>;
  userId: string; setUserId: React.Dispatch<SetStateAction<string>>;
  aquariumName: string; setAquariumName: React.Dispatch<SetStateAction<string>>;
  selectedShape: string; setShape: React.Dispatch<SetStateAction<string>>;
  selectedMaterial: string; setMaterial: React.Dispatch<SetStateAction<string>>;
  selectedVoltage: string; setVoltage: React.Dispatch<SetStateAction<string>>;
  thickness: number; setThickness: React.Dispatch<SetStateAction<number>>;
  height: number; setHeight: React.Dispatch<SetStateAction<number>>;
  volume: number; setVolume: React.Dispatch<SetStateAction<number>>;
  hasPump: boolean; setHasPump: React.Dispatch<SetStateAction<boolean>>;
  hasFeeder: boolean; setHasFeeder: React.Dispatch<SetStateAction<boolean>>;
  hasThermostat: boolean; setHasThermostat: React.Dispatch<SetStateAction<boolean>>;
  hasFilter: boolean; setHasFilter: React.Dispatch<SetStateAction<boolean>>;
  hasLedLights: boolean; setHasLedLights: React.Dispatch<SetStateAction<boolean>>;
  hasVegetation: boolean; setHasVegetation: React.Dispatch<SetStateAction<boolean>>;
  hasExternalTemperatureSensor: boolean; setHasExternalTemperatureSensor: React.Dispatch<SetStateAction<boolean>>;
  hasWaterLevelSensor: boolean; setHasWaterLevelSensor: React.Dispatch<SetStateAction<boolean>>;
  hasLuminositySensor: boolean; setHasLuminositySensor: React.Dispatch<SetStateAction<boolean>>;
  hasPhSensor: boolean; setHasPhSensor: React.Dispatch<SetStateAction<boolean>>;
  hasSaturationSensor: boolean; setHasSaturationSensor: React.Dispatch<SetStateAction<boolean>>;
  hasFish: boolean; setHasFish: React.Dispatch<SetStateAction<boolean>>;
  hasTurtle: boolean; setHasTurtle: React.Dispatch<SetStateAction<boolean>>;
  hasSnake: boolean; setHasSnake: React.Dispatch<SetStateAction<boolean>>;
  hasFrog: boolean; setHasFrog: React.Dispatch<SetStateAction<boolean>>;
  fishQuantity: number; setFishQuantity: React.Dispatch<SetStateAction<number>>;
  turtleQuantity: number; setTurtleQuantity: React.Dispatch<SetStateAction<number>>;
  snakeQuantity: number; setSnakeQuantity: React.Dispatch<SetStateAction<number>>;
  frogQuantity: number; setFrogQuantity: React.Dispatch<SetStateAction<number>>;
}

type AppProviderProps = {
  children: React.ReactNode;
}

export const AquariumContext = createContext<AppContextProps>({} as AppContextProps);

export function AquariumProvider({ children }: AppProviderProps) {
  const [token, setToken] = useState<string>('');
  const [userId, setUserId] = useState<string>('');

  const [aquariumName, setAquariumName] = useState<string>('');
  const [selectedShape, setShape] = useState<string>('Retangular');
  const [selectedMaterial, setMaterial] = useState<string>('Vidro');
  const [selectedVoltage, setVoltage] = useState<string>('127V');
  const [thickness, setThickness] = useState<number>(10.0);
  const [height, setHeight] = useState<number>(10.0);
  const [volume, setVolume] = useState<number>(10.0);

  const [hasPump, setHasPump] = useState<boolean>(false);
  const [hasFeeder, setHasFeeder] = useState<boolean>(false);
  const [hasThermostat, setHasThermostat] = useState<boolean>(false);
  const [hasFilter, setHasFilter] = useState<boolean>(false);
  const [hasLedLights, setHasLedLights] = useState<boolean>(false);
  const [hasVegetation, setHasVegetation] = useState<boolean>(false);

  const [hasExternalTemperatureSensor, setHasExternalTemperatureSensor] = useState<boolean>(false);
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
    }}>
      {children}
    </AquariumContext.Provider>
  );
}

export const useAquarium = () => useContext(AquariumContext);
