import { S } from './styles';
import { FlatList } from 'react-native';
import { AquariumItems } from '../AquariumItems';


type AquariumsListProps = {
  navigation: any;
  data: any;
};

export const AquariumsList = ({navigation, data}:AquariumsListProps) => {
  return(
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <AquariumItems
          item={item}
          onPress={() => {navigation.navigate('Aquariums')}}
        />
      )}
      keyExtractor={item => item.id}
      style={S.list}
    />
  );
};
