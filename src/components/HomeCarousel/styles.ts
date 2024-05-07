import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';


export const S = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
    color: Colors.carouselText,
    marginHorizontal: 30,
    marginVertical: 10,
    lineHeight: 24,
  },
});
