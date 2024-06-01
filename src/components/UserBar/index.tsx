import { S } from './styles';
import { Icons } from '../../theme/Icons';
import { View, Text, Image } from 'react-native';
import { UserButton } from '../UserButton';
import { PowerButton } from '../PowerButton';


type UserBarProps = {
  userButtonContent: string;
  userButtonOnPress: any;
  logOffButtonOnPress: any;
};

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
