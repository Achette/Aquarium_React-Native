import { Icons } from '../theme';
import { Sensor, Pet } from '../types';


const map:any = {
  icon: {
    'Curvo': Icons.circularShape,
    'Sextavado': Icons.hexagonalShape,
    'Retangular': Icons.rectangularShape,
  },
  sensor: {
    'Temperatura': Icons.temperatureData,
    'Saturação': Icons.saturationData,
    'pH': Icons.phData,
    'Nível de água': Icons.waterLevelData,
    'Luminosidade': Icons.luminosityData,
  },
  sensorPrefixes: {
    'Temperatura': ' °C',
    'Saturação': ' ppm',
    'pH': '',
    'Nível de água': ' cm',
    'Luminosidade': ' lm',
  },
  pet: {
    'Peixe': Icons.fish,
    'Tartaruga': Icons.turtle,
    'Cobra': Icons.snake,
    'Sapo': Icons.frog,
  },
}

export const useAquariumData = (selectedAquarium:any, lastCleaning:string, lastFeeding:string) => {

  if (!selectedAquarium) return null;
  console.log('selectedAquarium ID:', selectedAquarium.id);

  const icon = map.icon[selectedAquarium.format_aquarium] || Icons.rectangularShape;
  const title = selectedAquarium.name;

  const configs = [
    { icon: Icons.material, content: selectedAquarium.material },
    { icon: Icons.voltage, content: `${selectedAquarium.voltage}V` },
    { icon: Icons.height, content: `${selectedAquarium.height}cm` },
    { icon: Icons.thickness, content: `${selectedAquarium.thickness}mm` },
    { icon: Icons.capacity, content: `${selectedAquarium.capacity}L` },
  ];

  const data = [
    { icon: Icons.lastCleaningData, title: 'Última Limpeza', value: lastCleaning },
    { icon: Icons.lastFeedingData, title: 'Última Alimentação', value: lastFeeding },
  ];

  if (selectedAquarium.sensors && selectedAquarium.sensors.length > 0) {
    selectedAquarium.sensors.forEach((sensor:Sensor) => {
      data.push({ icon: map.sensor[sensor.name], title: sensor.name, value: `${sensor.current}${map.sensorPrefixes[sensor.name]}` });
    });
  }
  
  if (selectedAquarium.pets && selectedAquarium.pets.length > 0) {
    selectedAquarium.pets.forEach((pet:Pet) => {
      configs.push({ icon: map.pet[pet.species], content: pet.quantity });
    });
  }

  return { icon, title, configs, data };
};
