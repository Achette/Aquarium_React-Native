import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';


export const S = StyleSheet.create({
  button: {
    borderColor: Colors.primary,
    borderWidth: 1.2,
    borderRadius: 16,
    alignItems: 'center',
    padding: 2,
    width: 100,
    minHeight: 120,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 14,
    color: Colors.primary,   
    textAlign: 'center',
  },
  icon: {
    height: 70,
    maxWidth: 90,
    resizeMode: 'contain',
    marginVertical: 8,
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
  },
  changeValueButton: {
    color: Colors.primary,
    fontSize: 20,
    paddingHorizontal: 15,
  },
  changeValueText: {
    color: Colors.primary,
    fontSize: 18,
    marginHorizontal: 4, 
  },
});
