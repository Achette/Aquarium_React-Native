import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/Colors';


export const S = StyleSheet.create({
  page: {
    flex:1,
    marginVertical: 10,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    color: Colors.primary,
    marginTop: 52,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.subtitleText,
    opacity: 0.6,
    marginTop: 8,
  },
  input: {
    marginBottom: 8,
  },
  inputContainer: {
    marginTop: 16,
    width: '80%',
    opacity: 0.6,
  },
  placeholderText: {
    color: Colors.placeholderText,
  },
  error: {
    color: Colors.inputErrorText,
  }
});
