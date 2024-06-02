import { View, Image } from 'react-native';
import { Button, Text } from '@rneui/themed';
import { NewAquariumCheckboxProps } from '../../types';
import { S } from './styles';


export const NewAquariumCheckbox = ({onSelect, selectedValue, object, title, iconStyle}:NewAquariumCheckboxProps) => {
  return (
    <View style={{ width: '100%' }}>
      <Text style={S.title}>{title}</Text>
        <View style={S.checkBoxContainer}>
          {object.map((obj) => (
            <Button
              key={obj.value}
              title={obj.title}
              type='outline'
              titleStyle={S.checkBoxText}
              buttonStyle={[ S.checkBox, selectedValue === obj.value ? {} : {opacity: 0.4}]}
              onPress={() => onSelect(obj.value)}
              icon={
                obj.icon === undefined ? undefined :
                <Image source={obj.icon} style={[S.checkBoxIcon, iconStyle]}/>
              }
            />
          ))}
        </View>
    </View>
  );
};
