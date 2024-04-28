import React, {useState} from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text } from '@rneui/themed';
import { Colors } from '../../theme/Colors';
import { PrimaryButton, SecondaryButton } from '../../components/DefaultButtons';
import { ItemButton } from '../../components/ItemButton';

function NewPets({navigation}) {

  const [hasFish, setHasFish] = useState(false);
  const [hasTurtle, setHasTurtle] = useState(false);
  const [hasSnake, setHasSnake] = useState(false);
  const [hasFrog, setHasFrog] = useState(false);

  const [fishQuantity, setFishQuantity] = useState(1);
  const [turtleQuantity, setTurtleQuantity] = useState(1);
  const [snakeQuantity, setSnakeQuantity] = useState(1);
  const [frogQuantity, setFrogQuantity] = useState(1);

  const fishIcon = require('../../assets/icons/fish.png');
  const turtleIcon = require('../../assets/icons/turtle.png');
  const snakeIcon = require('../../assets/icons/snake.png');
  const frogIcon = require('../../assets/icons/frog.png');

  const pets = [
    { title: 'Peixe', icon: fishIcon, onPress: () => setHasFish(!hasFish), isSelected: hasFish, itemQuantity: fishQuantity, setQuantity: setFishQuantity},
    { title: 'Tartaruga', icon: turtleIcon, onPress: () => setHasTurtle(!hasTurtle), isSelected: hasTurtle, itemQuantity: turtleQuantity, setQuantity: setTurtleQuantity},
    { title: 'Cobra', icon: snakeIcon, onPress: () => setHasSnake(!hasSnake), isSelected: hasSnake, itemQuantity: snakeQuantity, setQuantity: setSnakeQuantity},
    { title: 'Sapo', icon: frogIcon, onPress: () => setHasFrog(!hasFrog), isSelected: hasFrog, itemQuantity: frogQuantity, setQuantity: setFrogQuantity},
  ]

  return (
    <ScrollView>
      <View style={styles.page}>
        <Text style={styles.title}>Pets</Text>

        <View style={styles.petsButtonsContainer}>
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

        <View style={styles.buttonsContainer}>
          <PrimaryButton content="Avançar" onPress={() => navigation.navigate('Aquariums')} />
          <SecondaryButton content="Voltar" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex:1,
    alignItems: 'center',
    height: '100%',
    margin: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginTop: 8,
    marginBottom: 16,
  },
  petsButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
    marginVertical: 28,
    paddingHorizontal: 10,
  },
  buttonsContainer: {
    width: '120%',
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
  }
});

export default NewPets;
