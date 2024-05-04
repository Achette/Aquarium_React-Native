import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';


export const S = StyleSheet.create({
  powerButton: {
    backgroundColor: Colors.primary,
    width: 36,
    height: 36,
    borderRadius: 50
  },
  powerIconContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 36,
    height: 36
  }
});
