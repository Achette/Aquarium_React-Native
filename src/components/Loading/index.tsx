import { ActivityIndicator, View, Text } from 'react-native';
import { LoadingProps } from '../../types';
import { Colors } from '../../theme';
import { S } from './styles';


export const Loading = ({text}:LoadingProps) => {
  return (
    <View style={S.loadingContainer}>
      <Text style={S.loadingText}>{text}</Text>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};
