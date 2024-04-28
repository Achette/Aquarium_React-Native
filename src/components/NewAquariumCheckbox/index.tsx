import { S } from './styles';
import { View, Image } from 'react-native';
import { Button, Text } from '@rneui/themed';


type NewAquariumCheckboxProps = {
  onSelect: any;
  selectedValue: string;
  object: any[];
  title: string;
  iconStyle?: any;
}

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
                obj.icon === undefined ? null :
                <Image source={obj.icon} style={[S.checkBoxIcon, iconStyle]}/>
              }
            />
          ))}
        </View>
    </View>
  );
};
