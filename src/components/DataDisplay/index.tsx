import { S } from './styles';
import { Text, View, Image } from 'react-native';


type DataDisplayProps = {
  title: string;
  value: string;
  icon: any;
};

export const DataDisplay = ({title, value, icon}:DataDisplayProps) => {
  return(
    <View style={S.container}>
      <View style={S.titleContainer}>
        <Image style={S.icon} source={icon} />
        <Text style={S.text}>{title}</Text>
      </View>
      <Text style={S.value}>{value}</Text>
    </View>
  );
};
