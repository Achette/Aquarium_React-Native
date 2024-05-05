import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';


export const S = StyleSheet.create({
  page: {
    flex:1,
    alignItems: 'center',
    height: '100%',
    padding: 24,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginTop: 8,
    marginBottom: 16,
  },
  sensorsButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
    marginVertical: 28,
  
  },
  buttonsContainer: {
    width: '120%',
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
  }
});
