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
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 100,
  },
  configsDisplay: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    marginTop: 30,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
