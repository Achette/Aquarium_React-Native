import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';


export const S = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.primary,
    opacity: 0.6,
    height: 40,
    padding: 10,
  },
  icon:{
    width: 20,
    resizeMode: 'contain',
  },
  verticalLine: {
    color: Colors.primary,
    fontWeight: '100',
    fontSize: 50,
    lineHeight: 45,
  },
  text: {
    color: Colors.primary,
    fontSize: 16,
  },
});
