import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';


export const S = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  text: {
    color: Colors.primary,
    fontSize: 22,
    marginTop: 250,
    textAlign: 'justify',
    paddingHorizontal: 35,
  },
  textLink: {
    fontWeight: 'bold',
    marginTop: 10,
  }
});
