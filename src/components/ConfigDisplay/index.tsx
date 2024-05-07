import { S } from './styles';
import { Text, View, Image } from 'react-native';


type ConfigDisplayProps = {
  content: string;
  icon: any;
};

export const ConfigDisplay = ({content, icon}:ConfigDisplayProps) => {
  return(
    <View style={S.container}>
      <Image style={S.icon} source={icon} />
      <Text style={S.verticalLine}>|</Text>
      <Text style={S.text}>{content}</Text>
    </View>
  );
};
