import { Image, Text, View } from 'react-native';
import { Button } from '@rneui/themed';
import { ActionButtonProps } from '../../types';
import { S } from './styles';


export const ActionButton = ({icon, title, onPress}:ActionButtonProps) => {
  return (
    <View style={S.buttonElement}>
      <Button
        buttonStyle={S.button}
        containerStyle={[S.buttoncontainer]}
        onPress={onPress}
      >
        <Image
          style={{width: 24, height: 24}}
          source={icon}
        />
      </Button>
      <Text style={S.buttonText}>{title}</Text>
    </View>
  );
};
