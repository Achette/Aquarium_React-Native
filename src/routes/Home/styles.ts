import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';


export const S = StyleSheet.create({
  page: {
    flex:1,
    height: '100%',
    paddingVertical: 10,
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  buttons: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 42,
    marginTop: 22,
  },
});
