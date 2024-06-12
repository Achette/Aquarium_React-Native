import { View, Text, Image } from 'react-native';
import { UserButton, PowerButton } from '../';
import { UserBarProps } from '../../types';
import { Icons } from '../../theme';
import { S } from './styles';


export const UserBar = ({userButtonContent, userButtonOnPress, logOffButtonOnPress}:UserBarProps) => {
  return (
    <View style={S.topBar}>
      <Image source={Icons.logo}/>
      <View style={S.buttonsContainer}>
        <UserButton content={userButtonContent} onPress={userButtonOnPress}/>
        <Text style={S.verticalLine}>|</Text>
        <PowerButton onPress={logOffButtonOnPress} size={16}/>
      </View>
    </View>
  );
};
