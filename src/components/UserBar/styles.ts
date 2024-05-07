import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';


export const S = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 105,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 50,
    padding: 5,
    maxHeight: 50,
  },
  verticalLine: {
    color: Colors.primary,
    fontWeight: '100',
    fontSize: 40,
    lineHeight: 45,
  },
});
