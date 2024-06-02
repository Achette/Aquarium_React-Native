import { View, ScrollView } from 'react-native';
import { Text } from '@rneui/themed';
import { ItemButton, DefaultPrimaryButton, DefaultSecondaryButton, Loading } from '../../components';
import { useCreateAquarium } from '../../hooks';
import { useAquarium } from '../../context';
import { Icons } from '../../theme';
import { S } from './styles';


export default function NewPets({navigation}:any) {

  const { createAquarium, loading } = useCreateAquarium();

  const {
    hasFish, setHasFish, fishQuantity, setFishQuantity,
    hasTurtle, setHasTurtle, turtleQuantity, setTurtleQuantity,
    hasSnake, setHasSnake, snakeQuantity, setSnakeQuantity,
    hasFrog, setHasFrog, frogQuantity, setFrogQuantity,
  } = useAquarium();

  const pets = [
    { title: 'Peixe', icon: Icons.fish, onPress: () => setHasFish(!hasFish), isSelected: hasFish, itemQuantity: fishQuantity, setQuantity: setFishQuantity},
    { title: 'Tartaruga', icon: Icons.turtle, onPress: () => setHasTurtle(!hasTurtle), isSelected: hasTurtle, itemQuantity: turtleQuantity, setQuantity: setTurtleQuantity},
    { title: 'Cobra', icon: Icons.snake, onPress: () => setHasSnake(!hasSnake), isSelected: hasSnake, itemQuantity: snakeQuantity, setQuantity: setSnakeQuantity},
    { title: 'Sapo', icon: Icons.frog, onPress: () => setHasFrog(!hasFrog), isSelected: hasFrog, itemQuantity: frogQuantity, setQuantity: setFrogQuantity},
  ]

  const handleCreateAquarium = async () => {
    createAquarium(navigation);
  };

  return (
    <ScrollView>
      <View style={S.page}>
        {loading ? (
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
