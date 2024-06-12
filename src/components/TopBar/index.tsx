import { View, Text, Image } from 'react-native';
import { TopBarProps } from '../../types';
import { TopBarBackButton, TopBarConfigButton } from '../';
import { S } from './styles';


export const TopBar = ({ title, icon, hasBackButton=false, navigation}:TopBarProps) => {
  return (
    <View style={S.topBar}>
      {hasBackButton ? <TopBarBackButton navigation={navigation}/> : null}
      <View style={S.titleContainer}>
        <Image style={S.icon} source={icon}/>
        <Text style={S.title}>{title}</Text>
      </View>
      <TopBarConfigButton/>
    </View>
  );
};
