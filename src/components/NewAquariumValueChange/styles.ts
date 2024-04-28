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
  selectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
  },
  changeValueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 6,
    minWidth: 130,
  },
  changeValueButton: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 15,
  },
  changeValueText: {
    color: Colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 4, 
  },
});
