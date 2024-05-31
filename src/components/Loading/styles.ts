import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';


export const S = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 700,
    backgroundColor: Colors.background,
  },
  loadingText: {
    fontSize: 20,
    color: Colors.primary,
    marginBottom: 20,
  },
});
