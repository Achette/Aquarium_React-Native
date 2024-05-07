import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';


export const S = StyleSheet.create({
  primaryButton: {
    backgroundColor: Colors.primary,
    height: 48,
  },
  primaryButtonTitle: {
    fontSize: 16,
  },
  primaryButtoncontainer: {
    width: '80%',
    borderRadius: 60,
  },
  secondaryButton: {
    height: 48,
  },
  secondaryButtonTitle: {
    fontSize: 16,
    color: Colors.primary,
  },
  secondaryButtoncontainer: {
    width: '80%',
    borderRadius: 60,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  textButtonTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.primary,
  },
});
