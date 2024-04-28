import { S } from './styles';
import { View, Text, Image } from 'react-native';
import { UserButton, LogOffButton } from '../UserButtons';


type UserBarProps = {
  userButtonContent: string;
  userButtonOnPress: any;
  logOffButtonOnPress: any;
};

export const UserBar = ({userButtonContent, userButtonOnPress, logOffButtonOnPress}:UserBarProps) => {
  
  const LogoPNG = require('../../assets/icons/logo.png');

  return (
    <View style={S.topBar}>
      <Image source={LogoPNG}/>
      <View style={S.buttonsContainer}>
        <UserButton content={userButtonContent} onPress={userButtonOnPress}/>
        <Text style={S.verticalLine}>|</Text>
        <LogOffButton onPress={logOffButtonOnPress}/>
      </View>
    </View>
  );
};
