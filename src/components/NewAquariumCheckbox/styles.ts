import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';


export const S = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginVertical: 8,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    margin: 0,
    padding: 0,
    marginBottom: 16,
  },
  checkBoxText: {
    fontSize: 14,
    color: Colors.primary,
  },
  checkBox: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 6,
  },
  checkBoxIcon: {
    width: 16,
    height: 16,
    objectFit: 'contain',
    marginRight: 6,
  },
});
