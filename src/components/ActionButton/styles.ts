import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';


export const S = StyleSheet.create({
  button: {
    backgroundColor: Colors.secondary,
    width: '100%',
    height: '100%',
  },
  buttoncontainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: Colors.primary,
    borderWidth: 1.5,
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 12,
  },
  buttonElement: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
