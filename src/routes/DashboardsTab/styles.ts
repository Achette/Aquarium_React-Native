import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';


export const S = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  text: {
    color: Colors.primary,
    fontSize: 28,
    fontWeight: 'bold',
  },
});
