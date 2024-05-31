import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';


export const S = StyleSheet.create({
  page: {
    flex:1,
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  noAquariums: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noAquariumsText: {
    fontSize: 18,
    color: Colors.primary,
  },
  bottomBar: {
    marginBottom: 50,
    width: '85%',
    alignItems: 'flex-end',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
});
