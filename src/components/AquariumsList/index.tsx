import { FlatList } from 'react-native';
import { AquariumsListProps } from '../../types';
import { AquariumItems } from '../';
import { S } from './styles';


export const AquariumsList = ({navigation, data}:AquariumsListProps) => {
  return(
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <AquariumItems
          item={item}
          onPress={() => {navigation.navigate('Aquarium', { aquarium: item })}}
        />
      )}
      keyExtractor={item => item.id}
      style={S.list}
    />
  );
};
