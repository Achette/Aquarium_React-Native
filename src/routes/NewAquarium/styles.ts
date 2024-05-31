import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';


export const S = StyleSheet.create({
  page: {
    flex:1,
    alignItems: 'center',
    padding: 24,
    backgroundColor: Colors.background,
  },
  inputContainer: {
    flex: 1,
    marginTop: 16,
    width: '106%',
    opacity: 0.6,
  },
  input: {
    marginBottom: 8,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    marginVertical: 8,
  },
  buttonsContainer: {
    width: '120%',
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
  },
  placeholderText: {
    color: Colors.placeholderText,
  },
  error: {
    color: Colors.inputErrorText,
  },
});
