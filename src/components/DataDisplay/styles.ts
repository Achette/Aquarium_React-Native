import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';


export const S = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 3,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.primary,
    height: 70,
    padding: 10,
  },
  titleContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  icon:{
    width: 20,
    resizeMode: 'contain',
  },
  text: {
    color: Colors.primary,
    fontSize: 18,
  },
  value: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  }
});
