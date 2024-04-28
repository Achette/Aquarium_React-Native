import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';


export const S = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    width: 140,
    height: 48,
  },
  secondaryButton: {
    backgroundColor: Colors.secondary,
    borderWidth: 0,
  },
  container: {
    marginVertical: 10,
    marginHorizontal: 50,
  },
  title: {
    color: Colors.primary,
  }
});
