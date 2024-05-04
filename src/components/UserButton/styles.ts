import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';


export const S = StyleSheet.create({
  userButton: {
    backgroundColor: Colors.primary,
    width: 40,
    height: 40,
    borderRadius: 60,
  },
  userButtonTitle: {
    fontSize: 18,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  logOffButton: {
    backgroundColor: Colors.primary,
    width: 36,
    height: 36,
    borderRadius: 50
  },
  logOffIconContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36
  }
});
