import { S } from './styles';
import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from '@rneui/themed';
import { ItemButton } from '../../components/ItemButton';
import { PrimaryButton, SecondaryButton } from '../../components/DefaultButtons';


function NewPets({navigation}:any) {

  const [hasFish, setHasFish] = useState(false);
  const [hasTurtle, setHasTurtle] = useState(false);
  const [hasSnake, setHasSnake] = useState(false);
  const [hasFrog, setHasFrog] = useState(false);

  const [fishQuantity, setFishQuantity] = useState(1);
  const [turtleQuantity, setTurtleQuantity] = useState(1);
  const [snakeQuantity, setSnakeQuantity] = useState(1);
  const [frogQuantity, setFrogQuantity] = useState(1);

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
          <PrimaryButton content="Avançar" onPress={() => navigation.navigate('Aquarium')} />
          <SecondaryButton content="Voltar" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </ScrollView>
  );
}

export default NewPets;
