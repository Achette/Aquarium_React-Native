import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';


export const S = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: Colors.primary,
    borderWidth: 1.2,
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: Colors.background,
    width: '95%',
  },
  titleAndIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Colors.primary,   
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  icon: {
    width: 45,
    maxHeight: 55,
    resizeMode: 'contain',
  },
});
