import { S } from './styles';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '@rneui/themed';


type NewAquariumValueChangeProps = {
  title: string;
  value: number;
  setValue: any;
}

export const NewAquariumValueChange = ({title, value, setValue}:NewAquariumValueChangeProps) => {
  return (
    <View style={S.selectionContainer}>
      <Text style={S.title}>{title}</Text>
      <View style={S.changeValueContainer}>
        <TouchableOpacity>
          <Text
            style={S.changeValueButton}
            onPress={() => {if(value>0){setValue(value - 0.5)}}}
          >-</Text>
        </TouchableOpacity>
        <Text style={S.changeValueText}>{value.toFixed(1)}</Text>
        <TouchableOpacity>
          <Text
            style={S.changeValueButton}
            onPress={() => {if(value<50){setValue(value + 0.5)}}}
          >+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
