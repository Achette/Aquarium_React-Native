import { SetStateAction } from 'react';


// == INTERFACES FOR API ==

export interface Aquarium {
  id: string;
  name: string;
  format_aquarium: string;
  material: string;
  voltage: string;
  height: number;
  thickness: number;
  capacity: number;
  accessories: Accessory[];
  sensors: Sensor[];
  pets: Pet[];
}

export interface Accessory {
  name: string;
}

export interface Sensor {
  name: string;
  metric: string;
  current: string;
}

export interface Pet {
  species: string;
  quantity: number;
}


// == INTERFACES FOR ROUTES ==

export interface AquariumDataProps {
  id?: string;
  name: string;
  format_aquarium: string;
  material: string;
  voltage: string;
  thickness: string;
  height: string;
  capacity: string;
};


// == INTERFACES FOR CONTEXTS ==

export interface AppContextProps {
  token: string; setToken: React.Dispatch<SetStateAction<string>>;
  userId: string; setUserId: React.Dispatch<SetStateAction<string>>;
  aquariumsList: any[]; setAquariumsList: React.Dispatch<SetStateAction<any[]>>;

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

  hasTemperatureSensor: boolean; setHasTemperatureSensor: React.Dispatch<SetStateAction<boolean>>;
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

export interface AppProviderProps {
  children: React.ReactNode;
}


// == INTERFACES FOR COMPONENTS ==

export interface ActionButtonProps {
  icon: any;
  title: string;
  onPress: any;
}

export interface AquariumsListProps {
  navigation: any;
  data: any;
}

export interface AquariumItemsProps {
  item: any;
  onPress: any;
}

export interface CarouselPaginatorProps {
  data: any;
  scrollX: any;
}

export interface ConfigDisplayProps {
  content: string;
  icon: any;
}

export interface DataDisplayProps {
  title: string;
  value: string;
  icon: any;
}

export interface ButtonProps {
  content: string;
  onPress: any;
}

export interface ButtonProps {
  content: string;
  onPress: any;
}

export interface ItemButtonProps {
  icon: any;
  title: string;
  onPress: any;
  isSelected: boolean;
  hasCounter?: boolean;
  itemQuantity?: number;
  setQuantity?: any;
}

export interface ItemControlButtonProps {
  icon: any;
  title: string;
  onPress: any;
  isSelected: boolean;
}

export interface LoadingProps {
  text: string;
}

export interface NewAquariumCheckboxProps {
  onSelect: any;
  selectedValue: string;
  object: any[];
  title: string;
  iconStyle?: any;
}

export interface NewAquariumValueChangeProps {
  title: string;
  value: number;
  setValue: any;
}

export interface PowerButtonProps {
  size: number;
  onPress: any;
}

export interface TopBarProps {
  title: string;
  icon: any;
  hasBackButton?: boolean;
  navigation?: any;
}

export interface UserBarProps {
  userButtonContent: string;
  userButtonOnPress: any;
  logOffButtonOnPress: any;
}

export interface UserButtonProps {
  content: string;
  onPress: any;
}
