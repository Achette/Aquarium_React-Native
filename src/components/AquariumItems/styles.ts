import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';


export const S = StyleSheet.create({
  button: {
    height: 56,
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
  },
  buttonTitle: {
    fontSize: 16,
    color: Colors.primary,
  },
  buttoncontainer: {
    borderRadius: 50,
    borderColor: Colors.primary,
    borderWidth: 1,
    marginVertical: 12,
    width: '85%',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: Colors.primary,
    marginLeft: 16,
    fontWeight: 'bold',
  },
});
