import { View, Image, TouchableOpacity } from 'react-native';
import { Text } from '@rneui/themed';
import { ItemButtonProps } from '../../types';
import { S } from './styles';


export const ItemButton = ({icon, title, onPress, isSelected=false, hasCounter=false, itemQuantity=1, setQuantity}:ItemButtonProps) => {
  let selectionOpacity = isSelected ? 1 : 0.4;

  return (
    <View>
      <TouchableOpacity 
        style={[S.button, {opacity: selectionOpacity}]}
        onPress={onPress}
      >

        <Image source={icon} style={S.icon}/>
        <Text style={S.title}>{title}</Text>

        {isSelected && hasCounter ? 
          <View style={S.counterContainer}>
            <TouchableOpacity>
              <Text
                style={S.changeValueButton}
                onPress={() => {if(itemQuantity>1){setQuantity(itemQuantity - 1)}}}
              >-</Text>
            </TouchableOpacity>
            <Text style={S.changeValueText}>{itemQuantity}</Text>
            <TouchableOpacity>
              <Text
                style={S.changeValueButton}
                onPress={() => {if(itemQuantity<50){setQuantity(itemQuantity + 1)}}}
              >+</Text>
            </TouchableOpacity>
          </View>
          : null
        }

      </TouchableOpacity>
    </View>
  );
};
