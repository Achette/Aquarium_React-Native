import { S } from './styles';
import { Colors } from '../../theme/Colors';
import { ActivityIndicator, View, Text } from 'react-native';


type LoadingProps = {
  text: string;
}

export const Loading = ({text}:LoadingProps) => {
  return (
    <View style={S.loadingContainer}>
      <Text style={S.loadingText}>{text}</Text>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};
