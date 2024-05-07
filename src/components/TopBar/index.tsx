import { S } from './styles';
import { View, Text, Image } from 'react-native';
import { BackButton, ConfigButton } from '../TopBarButtons';


type TopBarProps = {
  title: string;
  icon: any;
  hasBackButton?: boolean;
  navigation?: any;
};

export const TopBar = ({ title, icon, hasBackButton=false, navigation}:TopBarProps) => {
  return (
    <View style={S.topBar}>
      {hasBackButton ? <BackButton navigation={navigation}/> : null}
      <View style={S.titleContainer}>
        <Image style={S.icon} source={icon}/>
        <Text style={S.title}>{title}</Text>
      </View>
      <ConfigButton/>
    </View>
  );
};
